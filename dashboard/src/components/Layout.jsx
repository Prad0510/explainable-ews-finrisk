export default function Layout({children}){
    return(
        <div className="min-h-screen bg-gray-100">
            {/*Header*/}
            <header className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Early Warning Signal (EWS)
                    </h1>
                    <p className="text-sm text-gray-500">
                        Behavioural Credit Risk Monitoring - Research Prototype
                    </p>
                </div>
            </header>

            {/*Main Content*/}
            <main className="max-w-6xl mx-auto px-6 py-8">
                {children}
            </main>
        </div>
    )
}