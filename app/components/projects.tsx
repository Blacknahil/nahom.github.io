export default function Projects(){
    return (
    <section className="flex flex-col gap-y-5 mb-20 md:flex-row md:gap-y-0 text-zinc-300">

        <div className="flex text-xl font-semibold md:w-1/3">
        <h2 className="flex-start" >Projects</h2>
        </div>

        <div className="flex flex-col gap-y-3 md:w-2/3">

        <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-4 sm:gap-y-0">

            <a className="w-full sm:w-1/2 flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground transition-all hover:border-foreground/25 hover:shadow-sm" 
            href="https://github.com/Blacknahil/projects" target="_blank">

                <img src="Tutor_Linkup.png" alt="" className="h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover"
                loading="eager" width="1519" height="855" decoding="async" />

                <div className="flex flex-col gap-y-0.5 px-5 py-4">
                    <h1 className="text-lg font-medium">
                        Tutor Linkup
                    </h1>
                    <h2 className="pr-4 pl-4 pb-7 ml-4 list-disc text-muted-foreground">
                        FrontEnd Developer
                    </h2>
                </div>

                <ul className="pr-4 pl-4 pb-7 ml-4 list-disc text-muted-foreground">
                    <li className="marker py-1 marker::">I designed the UI Using figma</li>
                    <li className="marker py-1 marker::">Development with HTML, CSS, JavaScript and Bootstrap to create an intuitive and responsive user interface. </li>
                    <li className="marker py-1 marker::">The backend has been developed with Express Js.</li>
                    <li className="marker py-1 marker::">Project made for practicing Software Documentation Best Practices.</li>

                </ul>
            </a>

            <a className="w-full sm:w-1/2 flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground transition-all hover:border-foreground/25 hover:shadow-sm" 
            href="https://github.com/Blacknahil/JourneyET" target="_blank">

                <img src="JourneyET.png" alt="" className="h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover"
                loading="eager" width="1519" height="855" decoding="async" />

                <div className="flex flex-col gap-y-0.5 px-5 py-4">
                    <h1 className="text-lg font-medium">
                        JourneyET
                    </h1>
                    <h2 className="pr-4 pl-4 pb-7 ml-4 list-disc text-muted-foreground">
                        Full Stack Developer
                    </h2>
                </div>

                <ul className="pr-4 pl-4 pb-7 ml-4 list-disc  text-muted-foreground">
                    <li className="marker py-1  flex-start marker::">Developed for A2SV Hackathon 2024.</li>
                    <li className="marker py-1 flex-start marker::">The backed is being developed using NextJS</li>
                    <li className="marker py-1 marker::">The frontEnd has been developed using NextJS</li>
                    <li className="marker py-1 marker::">The UI Design has been developed on Figma and is found on GitHub.</li>
                    <li className="marker py-1  marker::">It is a plateform for anyone who does not know how to travel in Ethiopia, especially Tourists.</li>

                </ul>
            </a>
        </div>


        <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-4 sm:gap-y-0">

            <a className="w-full sm:w-1/2 flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground transition-all hover:border-foreground/25 hover:shadow-sm" 
            href="https://github.com/Blacknahil/flutter-2024-proj" target="_blank">

                <img src="noteMobileApp.png" alt="" className="h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover"
                loading="eager" width="1519" height="855" decoding="async" />

                <div className="flex flex-col gap-y-0.5 px-5 py-4">
                    <h1 className="text-lg font-medium">
                        Note Taking Mobile Application
                    </h1>
                    <h2 className="pr-4 pl-4 pb-7 ml-4 list-disc text-muted-foreground">
                        Full Stack developer
                    </h2>
                </div>

                <ul className="pr-4 pl-4 pb-7 ml-4 list-disc text-muted-foreground">
                    <li className="marker marker:: py-1">The backend API has been built using NestJs, with authentications and role based Authorization.</li>
                    <li className="marker marker:: py-1 ">The front end has been built Flutter</li>
                    <li className="marker marker:: py-1">For State management I used Bloc state management tool.</li>
                    <li className="marker marker:: py-1 ">State Managemnt using riverpod is also under implementation.</li>
                    <li className="marker marker:: py-1">MongoDB has been used for Database.</li>

                </ul>
            </a>

            <a className="w-full sm:w-1/2 flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground transition-all hover:border-foreground/25 hover:shadow-sm" 
            href="https://github.com/Blacknahil/web-assignments" target="_blank">

                <img src="noteWebApp.webp" alt="" className="h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover"
                loading="eager" width="1519" height="855" decoding="async" />

                <div className="flex flex-col gap-y-0.5 px-5 py-4">
                    <h1 className="text-lg font-medium">
                        Note Taking Website Application
                    </h1>
                    <h2 className="pr-4 pl-4 pb-7 ml-4 list-disc text-muted-foreground">
                        FrontEnd Developer
                    </h2>
                </div>

                <ul className="pr-4 pl-4 pb-7 ml-4 list-disc text-muted-foreground">
                <li className="marker marker:: py-1">The backend API has been built using NestJs, with authentications and role based Authorization.</li>
                    <li className="marker marker:: py-1 ">The front end has been with HTML,custom CSS and Vanila Javascript.</li>
                    <li className="marker marker:: py-1">MongoDB has been used for Database.</li>

                </ul>
            </a>
        </div>



        </div>

        </section>
        )
}