import Typewriter from "typewriter-effect";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="min-h-screen">
      <nav className="flex w-full absolute justify-between md:justify-evenly py-5">
        <a
          href="/"
          className="font-bold text-white text-xl self-center transform transition-all hover:scale-125 px-8 py-2"
        >
          SJadhav
        </a>
        <div className="flex self-center">
          <button className="text-white mx-8 md:hidden transform  transition-all hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul className=" text-white text-lg hidden md:flex">
            <li className="px-4 py-2  hover:transition-all hover:duration-500 border-transparent border-b-2 hover:border-white">
              <a href="#">Home</a>
            </li>
            <li className="px-4 py-2  hover:transition-all hover:duration-500 border-transparent border-b-2 hover:border-white">
              <a href="#">About</a>
            </li>
            <li className="px-4 py-2  hover:transition-all hover:duration-500 border-transparent border-b-2 hover:border-white">
              <a href="#">Resume</a>
            </li>
            <li className="px-4 py-2  hover:transition-all hover:duration-500 border-transparent border-b-2 hover:border-white">
              <a href="#">Projects</a>
            </li>
            <li className="px-4 py-2  hover:transition-all hover:duration-500 border-transparent border-b-2 hover:border-white">
              <a href="#">Blog</a>
            </li>
            <li className="px-4 py-2  hover:transition-all hover:duration-500 border-transparent border-b-2 hover:border-white">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="h-screen w-full bg-pro-img bg-fixed bg-cover text-white">
        <div className="flex flex-col h-full w-full items-center justify-center">
          <div className="w-60 h-60 rounded-full bg-suraj-img bg-cover border-4 shadow-2xl"></div>
          <div className="flex text-4xl md:text-5xl py-5">
            <div className="">Hey I'm </div>
            <div className="px-3 font-bold">Suraj Jadhav</div>
          </div>
          <dic className="text-2xl md:text-3xl">
            <Typewriter
              options={{
                strings: [
                  "Freelance Developer",
                  "Flutter Developer",
                  "Backend Developer",
                  "DevOps Enthusiastic",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </dic>
        </div>
      </div>
      <div className="flex flex-col bg-bground text-white justify-center items-center py-16">
        <p className="text-3xl mb-6 pb-2 font-semibold border-b-2">About</p>
        <div className="flex-col flex lg:flex-row lg:space-x-8 justify-center items-center">
          <div className="h-96 w-11/12 lg:w-96 bg-suraj-img bg-cover"></div>
          <div className="lg:w-1/2 w-11/12 py-4 lg:py-0">
            sdivbdsi vsdiov nsdnvsdnvsdnv sdnvdvnxcknv xcvnxcin v ozxv nzin
            sdionv idfnv dv dfvndfn dfk nvdfiovdoi zi ndf vndfndfn v opfvkjdnv
            vnd fvndfv nodnf voi dnfvn n dfovnfdnionsvindfidnfvn idfv
            ndfnisdfnlvdfnbdfn bndn dfvn inlsdf nvdnbdf dn oszlnzvbzsidnndfbn
            fdbdl dxfn bgyi g iu i giiu biubi blo bibiu lkn uiolbn oiul b fdbndn
            kdfn bddfoibnn nld fbn d fvbndfo invndfvnd fowsvuhbfd vbdf
            iodfnbdnfbfdbn dofn bdfoibn ondfobfdnbodfn bndbn dfbnosunv ds svdv
            sdnsan vsdijvn dsnva snbsdnivsd nvasnsv loasoi sdivbdsi vsdiov
            nsdnvsdnvsdnv sdnvdvnxcknv xcvnxcin v ozxv nzin sdionv idfnv dv
            dfvndfn dfk nvdfiovdoi zi ndf vndfndfn v opfvkjdnv vnd fvndfv nodnf
            voi dnfvn n dfovnfdnionsvindfidnfvn idfv ndfnisdfnlvdfnbdfn bndn
            dfvn inlsdf nvdnbdf dn oszlnzvbzsidnndfbn fdbdl dxfn b fdbndn kdfn
            bddfoibnn nld fbn d fvbndfo invndfvnd fowsvuhbfd vbdf iodfnbdnfbfdbn
            dofn bdfoibn ondfobfdnbodfn bndbn dfbnosunv ds svdv sdnsan vsdijvn
            dsnva snbsdnivsd nvasnsv loasoi
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white justify-center items-center py-8 bg-skill-bg bg-fixed bg-cover">
        <p className="text-3xl mb-6 pb-2 font-semibold  border-b-2">Skills</p>
        <div className="flex flex-col w-full px-6 items-start lg:items-center lg:justify-evenly lg:flex-row">
          <div className="">
            <div className="py-4 transform transition-all lg:hover:scale-125">
              <p className="text-xl">Core Java</p>
              <div className="relative">
                <div className="lg:w-96"></div>
                <div className="rounded-full h-2 w-80 lg:w-96 bg-white absolute"></div>
                <div className="rounded-full h-2 w-72 bg-skillbar absolute"></div>
              </div>
            </div>
            <div className="py-4 transform transition-all lg:hover:scale-125">
              <p className="text-xl">Flutter</p>
              <div className="relative">
                <div className="rounded-full h-2 w-80  lg:w-96 bg-white absolute"></div>
                <div className="rounded-full h-2 w-72 bg-skillbar absolute"></div>
              </div>
            </div>
            <div className="py-4 transform transition-all lg:hover:scale-125">
              <p className="text-xl">React JS</p>
              <div className="relative">
                <div className="rounded-full h-2 w-80 lg:w-96 bg-white absolute"></div>
                <div className="rounded-full h-2 w-40 bg-skillbar absolute"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-4 transform transition-all lg:hover:scale-125">
              <p className="text-xl">C/C++</p>
              <div className="relative">
                <div className="lg:w-96"></div>
                <div className="rounded-full h-2 w-80 lg:w-96 bg-white absolute"></div>
                <div className="rounded-full h-2 w-52 bg-skillbar absolute"></div>
              </div>
            </div>
            <div className="py-4 transform transition-all lg:hover:scale-125">
              <p className="text-xl">AWS/GCP</p>
              <div className="relative">
                <div className="rounded-full h-2 w-80 lg:w-96 bg-white absolute"></div>
                <div className="rounded-full h-2 w-64 bg-skillbar absolute"></div>
              </div>
            </div>
            <div className="py-4 transform transition-all lg:hover:scale-125">
              <p className="text-xl">DevOps</p>
              <div className="relative">
                <div className="rounded-full h-2 w-80 lg:w-96 bg-white absolute"></div>
                <div className="rounded-full h-2 w-52 bg-skillbar absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-bground justify-center lg:items-center text-white py-16">
        <p className="text-3xl mb-10 pb-2 font-semibold border-b-2 self-center">
          Work Experience
        </p>
        <div className="w-1 h-96 rounded-full bg-skillbar ml-6 lg:mx-0 "></div>
        <div className="absolute ml-14 mt-10 lg:ml-0 self-center mr-4 lg:mr-0">
          <div className="relative p-4 rounded-lg bg-gray-600 my-4 lg:mr-96 mt-16">
            <div className="">
              <p className="text-2xl font-semibold">ABC XYZ</p>
              <p>May 2021 -- Present Delhi, Maharashtra</p>
              <ul>
                <li>Build an Application</li>
                <li>Aplication dv psdvp</li>
                <li>fvdfsvdsfbgvsdf gws</li>
              </ul>
            </div>
            <div className="w-4 h-4 absolute bg-gray-600 -right-2 top-1/2 transform rotate-45"></div>
          </div>
          <div className="relative p-4 rounded-lg bg-gray-600 my-4 lg:ml-96">
            <div className="">
              <p className="text-2xl font-semibold">ABC XYZ</p>
              <p>May 2021 -- Present Delhi, Maharashtra</p>
              <ul>
                <li>Build an Application</li>
                <li>Aplication dv psdvp</li>
                <li>fvdfsvdsfbgvsdf gws</li>
              </ul>
            </div>
            <div className="w-4 h-4 absolute bg-gray-600 -left-2 top-1/2 transform rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
