/* eslint-disable @next/next/no-img-element */
export default function Profile () {
    return (
        <div className="flex flex-col text-center gap-3">
            <div className="w-40">
              <img src="/fotocartoon2.jpg" alt="Foto de João José" className="rounded-full shadow-lg shadow-[#70160E]/30" />
            </div>
            <div>
              <h2 className="font-bold text-2xl">João José</h2>
              <h2 className="font-medium">Estevão Melo Júnior</h2>
            </div>
        </div>
    );
}