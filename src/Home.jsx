import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

function Home() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="First Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>TRASFORMASI DIGITAL</h5>
            <p>PT PRIMAJAYA adalah perusahaan yang berfokus pada transformasi digital untuk berbagai sektor bisnis. Kami menyediakan solusi teknologi canggih yang dirancang untuk membantu perusahaan beradaptasi dan berkembang dalam dunia digital yang terus berkembang.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="Second Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>MENINGKATKAN EFISIENSI</h5>
            <p>Sebagai mitra strategis dalam perjalanan transformasi digital, PT PRIMAJAYA menawarkan berbagai layanan, mulai dari pengembangan perangkat lunak, integrasi sistem, hingga solusi pemasaran digital yang inovatif. Kami bekerja sama dengan klien untuk menciptakan solusi yang tidak hanya meningkatkan efisiensi operasional, tetapi juga membuka peluang baru melalui teknologi terbaru.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Third Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>TIM YANG PROFESIONAL</h5>
            <p>Dengan tim profesional yang berpengalaman dan komitmen untuk memberikan hasil yang optimal, PT PRIMAJAYA mendukung bisnis Anda dalam mencapai kesuksesan jangka panjang melalui penerapan teknologi yang tepat dan strategi digital yang efektif.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
