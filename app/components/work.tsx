
export default function WorkButton(){
    return (
      <div className="inline-block">

        <a href="#" className="inline-flex flex-row items-center gap-x-3 rounded-3xl border border-input box-content px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md">
<span className="relative flex items-center justify-center">
  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span>
  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" ></span>
</span>

<p className="font-medium text-zinc-200">
  Available to work
</p>
</a>
</div>
    )
}