import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ThreeColumnSection() {
  return (
    <div className="three-column-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-4">Our Features</h2>
            <p className="lead text-muted">
              Best place to visit in Nepal
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="/photo4jpg.jpg" className="card-img-top" alt="Community" style={{ height: 200, objectFit: 'cover' }} />
              <div className="card-body text-center p-4">
                <h5 className="card-title">Pokhara</h5>
                <p className="card-text">
                 Pokhara is a scenic city in central Nepal, known for its serene lakes and breathtaking views of the Annapurna and Machhapuchhre (Fishtail) mountains.
                  It’s a major hub for trekking and adventure sports like paragliding, boating, and ziplining. With its peaceful lakeside atmosphere and cultural sites,
                  it’s often called the “Tourist Capital of Nepal.”
                </p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="/kathmandu.jpeg" className="card-img-top" alt="Secure" style={{ height: 200, objectFit: 'cover' }} />
              <div className="card-body text-center p-4">
                <h5 className="card-title">Kathmandu</h5>
                <p className="card-text">
                 Kathmandu, the capital of Nepal, is the country’s largest city and cultural heart.
                  It’s famous for its ancient temples, palaces, and UNESCO World Heritage Sites like Kathmandu Durbar Square, Swayambhunath (Monkey Temple), and Pashupatinath. A vibrant mix of tradition and modern life, 
                 it serves as the main gateway for travelers exploring Nepal.
                </p>
                <button className="btn btn-outline-success">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="/lumbini.jpeg" className="card-img-top" alt="Mobile" style={{ height: 200, objectFit: 'cover' }} />
              <div className="card-body text-center p-4">
                <h5 className="card-title">Lumbini</h5>
                <p className="card-text">
                  Lumbini, located in southern Nepal, is the birthplace of Siddhartha Gautama, 
                  who later became the Buddha. It is a UNESCO World Heritage Site, attracting 
                  pilgrims and visitors with sacred sites like the Maya Devi Temple and monastic zones. Known for its peaceful atmosphere, 
                  Lumbini is an important spiritual and historical destination.
                </p>
                <button className="btn btn-outline-info">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeColumnSection;