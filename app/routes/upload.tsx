import { useState } from "react"
import Navbar from "~/components/Navbar"

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            <section className="main-section">
                <div className="page-haeding">
                    <h1>Smart Feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" alt="scan" className="w-full" />
                        </>
                    ) : (
                        <h2>Drop your resume for an ATS score and improvment tips</h2>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Upload