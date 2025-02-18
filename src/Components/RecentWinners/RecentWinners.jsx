import React, { useEffect } from "react";
import winnerframe from "../../Assets/winnerframe.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { winnerData } from "../../Atom";
import { GetWihoutHead } from "../../Utils/Utils";
import imgSource from "../../Assets/Group.png";
import enaamWinners from "../../Assets/Data/WinnersData.js";
const RecentWinners = () => {
  const location = useLocation();
  const pathName = location.pathname;
  // //console.log("location : " ,  location, pathName);
  // const [winners, setWinners] = useRecoilState(winnerData);
  useEffect(() => {
    // fetchWinners();
    // eslint-disable-next-line
  }, []);
  let navigate = useNavigate();
  // const fetchWinners = async () => {
  //   // //console.log("Fetching Winners");
  //   if(winners && winners.length > 0){
  //     // //console.log("Winners already fetched");
  //     return;
  //   }else{
  //     try {
  //       let res = await GetWihoutHead("/winner/winner");
  //       if (res) {
  //         //console.log(res.data,"prepadas");
  //         setWinners(res.data.data);
  //       }
  //     } catch (err) {
  //       console.log(err, "error fetching winners");
  //     }
  //   }
  //   return;
  // };
  console.log(enaamWinners);
  return (
    <div className="container-fluid px-5 py-0 text-center">
      <h1 className="Recent-title mb-5">Recent Winners</h1>
      <div className="row">
        {enaamWinners.map((winner) => (
          <div key={winner.id} className="col-md-3 mb-5">
            <div className="recent-winner text-center">
              <img src={imgSource} className="img-fluid winnerImg" alt="" />
              <div className="winner-frame">
                <img src={winnerframe} className="img-fluid" alt="" />
              </div>
              <div className="winner-detail mt-2">
                <p>{winner.name}</p>
                <span>{winner.prize}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {pathName === "/winners" || (
        <button
          onClick={() => {
            navigate("hang-tower-winners");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="btn btn-outline-warning btn-lg float-center mt-4"
        >
          EXPLORE MORE
        </button>
      )}
    </div>
  );
};

export default RecentWinners;
