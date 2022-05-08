import { useState, useEffect } from "react";
import NavBar from "../../components/Seller/NavBar";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { storage, database } from "../../src/utils/init-firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import { reload } from "firebase/auth";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useAuth } from "../../src/contexts/AuthContext";

function Bike() {
  const elements = ["1"];
  // , "2", "3", "4", "5"];
  const { currentUser } = useAuth();

  const [dates, setDates] = useState(new Date());
  const [imageUpload, setImageUpload] = useState(null);
  const [Location, setLocation] = useState("");
  const [price, setprice] = useState(null);

  function handlesetLocation(e) {
    setLocation(e.target.value);
    console.log(Location);
  }

  // const [imageUrls, setImageUrls] = useState([]);

  // console.log(imageUpload);
  // const uploadFile = () => {

  //   if (imageUpload == null) return;

  //   const imageRef = ref(storage, `Cabimages/${imageUpload.name + v4()}`);

  //   uploadBytes(imageRef, imageUpload).then(() => {
  //     alert("image uploaded");
  //     setImageUpload("");
  //   });
  // };
  // async function writeUserData(data) {
  //   const docRef = await setDoc(doc(database, "SellercabInfo",), data);
  // }
  async function writeUserData(data) {
    // const docRef = await setDoc(doc(database, "SellercabInfo",), data);
    const docRef = doc(collection(database, "SellerBikeInfo"));
    await setDoc(docRef, data)
      .then(() => {
        toast("Data Sent");
        // // getData();
        // setCabtype("");
        // setLocation("");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const uploadFile = () => {
    if (!imageUpload || !Location || !price) {
      toast("Data missing");
      return;
    }
    const imageRef = ref(
      storage,
      `SellerBikeimages/${imageUpload.name + v4()}`
    );
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // setImageUrls((prev) => [...prev, url]);
        var data = {
          uid: currentUser.uid,
          ImageUrl: url,
          Location: Location,
          Price: price,
          // email: response.user.email,
        };
        writeUserData(data);
        // console.table(imageUrls);
        console.table(url);
        // console.log(imageUrls);
        // alert("image uploaded");
      });
    });
  };

  return (
    <>
      {" "}
      <ToastContainer />
      <NavBar />
      {/* <div className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <p>Click the button to add a new element to the array.</p>
        <button onClick={myFunction}>Click</button>
      </div> */}
      <h1 className="text-center sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
        Bike Rental
      </h1>
      {elements.map((value, index) => {
        return (
          <>
            <section
              key={index}
              className="text-gray-600 body-font overflow-hidden"
            >
              <div className="container px-5 py-8 mx-auto border mt-6 border-gray-300">
                <div className="-my-8 divide-y-2 divide-gray-100 ">
                  {/* <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="w-64 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        Car Type
                      </span>
                    </div>
                    <div className="flex-grow">
                      <select
                        defaultValue={Cabtype}
                        onChange={handleAddrTypeChange}
                        id="cart-type"
                        name="cart-type"
                        // autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option selected value="4 Seater">
                          4 Seater
                        </option>
                        <option value="7 Seater">7 Seater</option>
                      </select>
                    </div>
                  </div> */}

                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        Select your Location
                      </span>
                    </div>
                    <div className="flex-grow">
                      <select
                        defaultValue={Location}
                        onChange={handlesetLocation}
                        // id="countries"
                        className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option selected value="">
                          Select your location
                        </option>
                        <option value="Gangtok">Gangtok</option>
                        <option value="Namchi">Namchi</option>
                        <option value="Bagdogra Airport">
                          Bagdogra Airport
                        </option>
                        <option value="Siliguri">Siliguri</option>
                        <option value="Melli">Melli</option>
                        <option value="Rangpo">Rangpo</option>
                        <option value="Singtam">Singtam</option>
                        <option value="32nd Mile">32nd Mile</option>
                        <option value="Chitrey">Chitrey</option>
                        <option value="Coronation Bridge">
                          Coronation Bridge
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        Choose Available Dates
                      </span>
                    </div>
                    <div className="flex-grow">
                      <div className="grid grid-flow-row">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <DatePicker
                              minDate={new Date()}
                              value={dates}
                              selected={dates}
                              onChange={setDates}
                              format="DD MMMM YYYY"
                              multiple
                              plugins={[<DatePanel key={dates} />]}
                            />
                          </div>

                          <div className="flex-grow">
                            <input
                              className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              id="Money"
                              placeholder="No. of days"
                              type="number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        Price in Rs.
                      </span>
                    </div>
                    <div className="flex-grow">
                      <input
                        className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        id="Money"
                        type="number"
                        value={price}
                        onChange={(event) => setprice(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        Upload Cab image
                      </span>
                    </div>
                    <div className="flex-grow">
                      <input
                        className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        aria-describedby="user_avatar_help"
                        type="file"
                        onChange={(event) => {
                          setImageUpload(event.target.files[0]);
                        }}
                        // value={imageUpload}
                      />
                      <div className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        Image
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={uploadFile}
                  className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>

              {/* <button onClick={() => setShow(prev => !prev)}>Click</button>
      {show && <Serviceprovided />} */}
            </section>
          </>
        );
      })}
    </>
  );
}

export default Bike;
