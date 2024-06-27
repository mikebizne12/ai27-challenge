import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/redux/hooks';
import {
  saveCharacteSelected,
  saveLastCharacterSelected,
} from 'src/redux/slices/characterSlice';
import { CharacterStatus } from 'src/utils/enums/character';
import { Character } from 'src/utils/interfaces/character';
import { Result } from 'src/utils/interfaces/result';

const CardCharacter = ({ data }: CardCharacterPropTypes): JSX.Element => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const handleDetail = (item: Character) => {
    dispatch(saveCharacteSelected(item));
    dispatch(saveLastCharacterSelected(item));
    navigate('/detail');
  };

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 border-t border-gray-200 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="max-w-sm   bg-white border border-gray-200  shadow dark:bg-zinc-700"
        >
          <LazyLoadImage
            src={item.image}
            alt=""
            placeholderSrc="/assets/no-image.png"
            width={'100%'}
          />

          <div className="p-5">
            <a href={`/detail`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name.substring(0, 20) + '...'}
              </h5>
            </a>

            <span
              className={
                'rounded-full px-2.5 py-2 rounded-full' +
                (item.status === CharacterStatus.ALIVE
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300')
              }
            >
              {item.status} - {item.species}
            </span>
            <div className="flex flex-row my-4">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="dark:text-white pl-2 pb-5">
                {item.location!.name.substring(0, 25) + '...'}
              </p>
            </div>

            <button
              onClick={() => handleDetail(item)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:bg-yellow-500 dark:bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 "
            >
              View
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

type CardCharacterPropTypes = {
  data: Result[];
};

export default CardCharacter;
