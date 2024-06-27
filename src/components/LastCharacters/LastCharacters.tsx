import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useCharacterSelector } from 'src/redux/hooks/characterManagementHooks';

export default function LastCharacters() {
  const { lastCharacters } = useCharacterSelector();

  return (
    <>
      {lastCharacters.length > 0 && (
        <div className="relative rounded-xl overflow-auto my-5">
          <div className=" mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5 ">
            <h5 className="pt-2 text-center text-2xl font-bold  text-gray-900 dark:text-white">
              Recently seen
            </h5>
            <div className="overflow-x-auto flex justify-center">
              {lastCharacters.map((item) => (
                <div
                  key={item.id}
                  className="flex-none py-6 px-3 first:pl-6 last:pr-6"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <LazyLoadImage
                      src={item.image}
                      alt=""
                      className="w-40 rounded-full"
                    />
                    <strong className="text-slate-900 text-xs font-medium dark:text-slate-200">
                      {item.name}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
