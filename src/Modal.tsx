export const Modal = ({
  showModal,
  setShowModal,
  headerText,
  body,
}: {
  showModal: boolean;
  setShowModal: (val: boolean) => void;
  headerText?: string;
  body?: JSX.Element;
}) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {!!headerText && (
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl text-slate-800/95 font-semibold">
                      {headerText}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-slate-800/95 text-3xl float-right leading-none font-semibold"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-slate-800/95 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                )}
                {/*body*/}
                {!!body && <div className="relative p-6 flex-auto">{body}</div>}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
