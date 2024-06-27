import { useEffect, useState } from 'react';
import { fetchFilteredCharacters } from 'src/services/characterApi';
import { Result } from '../../utils/interfaces/result';
import Loading from '../../components/Loading/Loading';
import { Filter } from 'src/utils/interfaces/filter';
import NotFoundAlert from '../../components/NotFoundAlert/NotFoundAlert';
import { useAppDispatch } from 'src/redux/hooks';
import { resetSelected } from 'src/redux/slices/characterSlice';
import LastCharacters from '../../components/LastCharacters/LastCharacters';
import Pagination from '../../components/Pagination/Pagination';
import { Info } from 'src/utils/interfaces/info';
import CardCharacter from 'src/components/CardCharacter/CardCharacter';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function Home() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const [data, setData] = useState<Result[]>([]);
  const [dataPagination, setDataPagination] = useState<Info>({
    count: 0,
    pages: 0,
    next: '',
    current_page: 1,
  });
  const [formData, setFormData] = useState({
    name: '',
    page: 1,
  });

  useEffect(() => {
    fetchCharacters();
    dispatch(resetSelected());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const fetchCharacters = async (params?: Filter) => {
    try {
      setLoading(true);
      const { results, info } = await fetchFilteredCharacters(params);
      setData(results);
      if (info.next) {
        const url = new URL(info.next);
        const page = url.searchParams.get('page');
        setCurrentPage(page ? Number(page) - 1 : 0);
        setDataPagination((prevFormData) => ({
          ...prevFormData,
          count: info.count,
          pages: info.pages,
          next: info.next,
          current_page: currentPage,
        }));
      }
      setLoading(false);
      setNotFound(false);
    } catch (error: any) {
      setNotFound(true);
      setData([]);
      setLoading(false);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await fetchCharacters(formData);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    if (e.target.name) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleClear = () => {
    setFormData({ name: '', page: 1 });
    fetchCharacters();
  };

  const handleChangePage = async (newPage: number) => {
    setCurrentPage(newPage);
    await fetchCharacters({ name: formData.name, page: newPage });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <SearchForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
      <section className="border-t mt-5">
        <LastCharacters />
      </section>
      <Loading open={loading} className="mt-4" />
      {!loading && (
        <>
          <CardCharacter data={data} />
          <Pagination
            count={dataPagination.count}
            currentPage={currentPage}
            pages={dataPagination.pages}
            handlePageChange={handleChangePage}
          />
        </>
      )}

      <NotFoundAlert
        show={notFound}
        title="No Characters Found"
        description="Try with different name"
      />
    </section>
  );
}
