import { Image } from "@nextui-org/react"
import Teams from "@/components/Teams"

export default function About(){
    
    return (
        <div>
            <div>
            <h1 className="text-2xl font-bold text-center">Tentang Kami</h1>
            <p className="text-lg tracking-wide text-center py-2">Selamat datang di <span className="font-bold">PC Garrage!</span> Kami adalah destinasi utama untuk kebutuhan PC Anda di Indonesia. Dengan fokus pada kualitas, layanan pelanggan yang unggul, dan pengalaman yang mendalam, kami berkomitmen untuk memberikan solusi terbaik bagi Anda.</p>
            </div>
            
            <div>
            <h2 className="text-xl font-bold text-center">Siapa Kami</h2>
            <p className="text-lg tracking-wide text-center py-2"><span className="font-bold">PC Garrage</span> didirikan dengan semangat dan visi untuk menjadi pusat terkemuka dalam industri teknologi di Indonesia. Sejak awal, kami telah mengutamakan kepuasan pelanggan dengan menyediakan produk terbaik dari merek-merek terkemuka dan memberikan dukungan teknis yang handal.</p>
            </div>

            <div>
            <h2 className="text-xl font-bold text-center">Misi Kami</h2>
            <p className="text-lg tracking-wide text-center py-2">Misi kami adalah memenuhi setiap kebutuhan PC Anda dengan solusi yang inovatif dan handal. Kami percaya bahwa teknologi dapat meningkatkan gaya hidup dan produktivitas, dan kami berkomitmen untuk membantu Anda memilih produk PC yang tepat sesuai dengan kebutuhan Anda.</p>
            </div>

            <div>
            <h2 className="text-xl font-bold text-center">Produk dan Layanan kami</h2>
            <p className="text-lg tracking-wide text-center py-2">Kami menawarkan berbagai macam PC dengan Spesifikasi yang bervariasi. Produk-produk kami berasal dari merek terpercaya yang telah terbukti kualitasnya di pasar. Selain itu, layanan pelanggan adalah prioritas utama kami. Tim ahli kami siap membantu Anda dengan saran yang komprehensif, perbaikan, dan dukungan teknis yang dibutuhkan.</p>
            </div>
            <div>
                <h2 className="text-xl font-bold text-center">Team Kami</h2>
                <Teams/>
            </div>

        </div>
    )
}