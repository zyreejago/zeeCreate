export default function AboutPage() {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About ZeeCreate</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            ZeeCreate is a team of passionate web developers dedicated to creating stunning and effective websites for
            businesses of all sizes. Our mission is to help our clients achieve their online goals through innovative
            design, cutting-edge technology, and exceptional customer service.
          </p>
          <h2 className="text-2xl font-semibold mt-12 mb-6">Our Values</h2>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
              <span className="font-semibold">Innovation:</span> We embrace new technologies and creative solutions to
              stay ahead in the ever-evolving digital landscape.
            </li>
            <li className="text-lg">
              <span className="font-semibold">Quality:</span> We strive for excellence in every project we undertake,
              ensuring the highest standards in design and functionality.
            </li>
            <li className="text-lg">
              <span className="font-semibold">Collaboration:</span> We work closely with our clients, valuing their input
              and vision to create websites that truly represent their brand.
            </li>
            <li className="text-lg">
              <span className="font-semibold">Integrity:</span> We are committed to honesty, transparency, and ethical
              practices in all our business dealings.
            </li>
          </ul>
          <div className="mt-12 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
            <p className="text-lg">
              With years of experience in web development, we specialize in creating responsive, user-friendly websites
              that not only look great but also perform exceptionally. From e-commerce solutions to corporate websites, we
              have the skills and knowledge to bring your digital vision to life.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  