export default function Certifications(){
    return (
        <section className="flex flex-col gap-y-5 mb-20 md:flex-row md:gap-y-0 text-zinc-300">

            <div className="flex text-xl font-semibold md:w-1/3">
            <h2 className="flex-start">
                Courses and Certifications
            </h2>
            </div>

            <div className="flex flex-col gap-y-3 md:w-2/3">

            <div className="relative rounded-2xl border border-border bg-primary-foreground px-5 py-3">
                <div className="flex flex-col gap-y-1.5">
                    <div className="flex flex-col gap-y-0.5">
                        <h1 className="text-lg font-medium">React Developer</h1>
                        <h2 className="text-muted-foreground">
                            A course dedicated to master react with interactive scrims and videos.(30 hrs)
                        </h2>
                        <h2 className="text-muted-foreground">Scrimba community</h2>
                    </div>
                </div>
            </div>


            <a className="relative rounded-2xl border border-border bg-primary-foreground px-5 py-3" 
            href="https://www.credly.com/badges/83b553e8-fd4d-4f00-97d5-154317879a6c/linked_in_profile" target="_blank">
                <div className="flex flex-col gap-y-1.5">
                    <div className="flex flex-col gap-y-0.5">
                        <h1 className="text-lg font-medium">Network Virtualization Concepts 🔗</h1>
                        <h2 className="text-muted-foreground">
                        entry level professional that has the basic understanding of network virtualization,
                         the Software-Defined Data Center, and basics of NSX architecture
                        </h2>
                        {/* <h2 className="text-muted-foreground">Studying Fourth Year</h2> */}
                    </div>
                </div>
            </a>


            </div>
        </section>
    )
}