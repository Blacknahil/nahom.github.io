export default function Education(){
    return (
        <section className="flex flex-col gap-y-5 mb-20 md:flex-row md:gap-y-0 text-zinc-300">

            <div className="flex text-xl font-semibold md:w-1/3">
            <h2 className="flex-start">
                Education
            </h2>
            </div>

            <div className="flex flex-col gap-y-5 md:w-2/3">

            <div className="relative rounded-2xl border border-border bg-primary-foreground px-5 py-3">
                <div className="flex flex-col gap-y-1.5">
                    <div className="flex flex-col gap-y-0.5">
                        <h1 className="text-lg font-medium">Addis Ababa University(AAiT)</h1>
                        <h2 className="text-muted-foreground">Schools of Information and Technology Engineering (Software Eng)</h2>
                        <h2 className="text-muted-foreground">Studying Fourth Year</h2>
                    </div>
                </div>
            </div>

            <div className="relative rounded-2xl border border-border bg-primary-foreground px-5 py-3">
                <div className="flex flex-col gap-y-1.5">
                    <div className="flex flex-col gap-y-0.5">
                        <h1 className="text-lg font-medium">Africa To Silicon Valley(A2SV)</h1>
                        <h2 className="text-muted-foreground">Competitive Programming</h2>
                        <h2 className="text-muted-foreground">Studying Data Structure and Algorithms</h2>
                    </div>
                </div>
            </div>

            </div>
        </section>
    )
}