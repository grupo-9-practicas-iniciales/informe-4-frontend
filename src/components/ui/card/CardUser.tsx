import { UserInterface } from "../../../api";
import { Avatar } from "../../";
import { Link } from "react-router-dom";
import { useContentStore } from "../../../hooks";

type CardUserProps = {
  user: UserInterface;
  behavior: "default" | "card";
};

export const CardUser = ({ user, behavior }: CardUserProps) => {
  const { setSelectedUser } = useContentStore();

  return (
    <>
      <div className="flex space-x-3 md:space-x-4 lg:space-x-5">
        {behavior === "card" && <Avatar user={user} />}
        <div className="flex flex-col text-sm md:text-base text-left w-full">
          <h3 className="font-semibold">
            {user.names} {user.lastnames}
          </h3>
          <p>
            <strong>Registro académico: </strong>
            {user.idStudent}
          </p>
          {behavior === "default" && (
            <p className="p-0">
              <strong>Email: </strong>
              {user.email}
            </p>
          )}

          {behavior === "card" && (
            <Link
              onClick={() => setSelectedUser(user)}
              to={`/profile/user`}
              className="text-info-dark-1"
            >
              Ver perfil
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
