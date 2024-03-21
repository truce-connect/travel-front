import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-{1240px} mx-auto grid lg:grid-cols-3 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>luxuey including vaction for two people</h2>
          <p className="py-4 pr-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae, nemo accusantium, ut rerum laborum voluptatem
            perspiciatis possimus id sapiente corporis fugiat placeat optio,
            libero molestias fugit ducimus architecto! Quae a accusantium cum
            amet numquam, optio ullam. Laboriosam mollitia nobis consectetur
            minus suscipit molestias assumenda similique autem! Tenetur tempore
            dolore magni illo quos nisi unde laborum magnam, iste corporis
            facere tempora at id rem, fuga blanditiis quia aut rerum excepturi
            recusandae asperiores ab, repellat fugiat? Itaque, reprehenderit
            commodi cumque id, voluptatum modi, minus asperiores libero
            veritatis ipsa amet eos tenetur dolorum adipisci necessitatibus
            reiciendis debitis perspiciatis nemo repellendus. Eveniet, quidem
            deleniti?
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row  items-center text-center">
            <button>
              <RiAccountCircleFill size={50} />
            </button>
            <div>
              <h3 className="py-2">leading service </h3>
              <p className=" py-2"> all inclusive service in arow</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">leading service </h3>
              <p className="py-1"> all inclusive service in arow</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="border text-center">
          <p>Get additional 10% off</p>
          <p className="py-4 "> 12 hours left</p>
          <p className="bg-gray-800 text-gray-200 py-2 pt-2">Book now and save </p>
        </div>
         <form  className="w-full">
            <div className="flex flex-col my-2">
                <label>Destination</label>
                 <select className="border rounded-md p-2">
                   <option>Grand antigua</option>
                   <option>Key west</option>
                   <option>maldives</option>
                   <option>Seychelles</option>
                 </select>
            </div>
             <div className="flex flex-col my-2">
               <label> check-in</label>
               <input type="date" className="border rounded-md p-2" />
             </div>
             <div className="flex flex-col my-2">
               <label> check</label>
               <input type="date" className="border rounded-md p-2" />
             </div>
               <button className="w-full my-4">Rate & Avialable</button>
         </form>
      </div>

    </div>
  );
};

export default Search;
