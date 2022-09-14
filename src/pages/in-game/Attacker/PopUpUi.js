import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function PopUpUi() {
    const navigate = useNavigate();

    const sweetUi = (WL, role) => {
        Swal.fire({
            title: WL,
            icon: role,
            showDenyButton: true,
            confirmButtonText: "Continue",
            denyButtonText: "Quit",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.reload();
            } else if (result.isDenied) {
                navigate("/");
            }
        });
    };
    const betweenUi = (wl, pho) => {
        Swal.fire({
            title: wl,
            width: 600,
            padding: "3em",
            color: "#2A2A2A",
            imageUrl: pho,
            imageHeight: 300,
            backdrop: `
              rgba(0,0,0,0.5)
              left top
              no-repeat
            `,
        });
    };
    return { sweetUi, betweenUi };
}

export default PopUpUi;
