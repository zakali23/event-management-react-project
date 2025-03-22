import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const AllEventsCard = ({ e }) => {
  const { id, name, image, short_description } = e;

  return (
    <div>
      <div className="md: max-w-screen-xl  mx-auto mt-2">
        <div
          data-aos="zoom-in-up"
          className="card  w-full  bg-base-100 shadow-xl"
        >
          <figure>
            <img className="object-cover w-full h-96" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{short_description.slice(0, 60)}</p>
            <div className="card-actions justify-end">
              <Link
                to={`/event/${id}`}
                className="text-white w-full mt-2 bg-gradient-to-br from-green-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEventsCard;

AllEventsCard.propTypes = {
  e: PropTypes.object,
};
