const CareersPage = () => {
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold mb-4">Careers</h1>
        <p>
          Join our team of talented web developers and designers! We're always
          looking for passionate individuals who are committed to excellence
          and innovation.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Open Positions</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Front-End Developer
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Back-End Developer
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Web Designer
            </a>
          </li>
        </ul>
      </div>
    );
  };

  export default CareersPage;
