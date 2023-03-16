import Links from './Links';



function Footer() {
  return (
    <footer className="bg-gray-700 text-white p-5">
    
      <Links/>
      <div>
        <p className="flex justify-center gap-2">
          Copyright © 2023
          <a href="https://www.example.com/" target="_blank" rel="noreferrer">
            Example Company
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
