import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { useCharacterSelector } from 'src/redux/hooks/characterManagementHooks';
import { CharacterStatus } from 'src/utils/enums/character';

export default function Detail() {
  let navigate = useNavigate();
  const { selected } = useCharacterSelector();
  const { name, location, type, gender, image, origin, status, species } =
    selected;

  useEffect(() => {
    if (!selected.name) {
      navigate('/');
    }
  }, [selected, navigate]);

  const icon = () => {
    return (
      <svg
        className="w-4 h-4  mr-2 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
      </svg>
    );
  };

  return (
    <section className="mx-auto max-w-3xl px-6 lg:px-8">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <LazyLoadImage
          src={image}
          alt=""
          className="object-cover w-full rounded-t-lg h-96  md:w-80 md:rounded-none md:rounded-s-lg"
          placeholderSrc="/assets/no-image.png"
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <span
            className={
              'rounded-full px-2.5 py-2 mb-3 w-fit ' +
              (status === CharacterStatus.ALIVE
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300')
            }
          >
            {status} - {species}
          </span>
          <div className="my-2.5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
              {icon()}
              <span>{location.name}</span>
            </p>
            {type && (
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
                {icon()}
                <span>{type}</span>
              </p>
            )}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
              {icon()}
              <span>{gender}</span>
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
              {icon()}
              <span>{origin.name}</span>
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-24 px-3 py-2 text-sm font-medium text-center text-white dark:bg-yellow-500 dark:bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 "
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
}
