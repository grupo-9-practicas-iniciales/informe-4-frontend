type Props = {
  displayUserName: string;
  isUserOnline?: boolean;
};

export const AvatarProfileButton = ({
  displayUserName,
  isUserOnline,
}: Props) => {
  return (
    <div className="relative pt-[2px] dark:text-white flex text-center leading-loose items-center justify-center text-[16px] h-10 w-10 bg-gray-200/[0.40] rounded-full">
      {isUserOnline && <span className="avatar-isUserActive"></span>}
      {displayUserName}
    </div>
  );
};
