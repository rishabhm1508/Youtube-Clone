export const DropdownList = ({ listStringArray }) => {
  return (
    <>
      {listStringArray.map((listItem) => {
        return (
          <div
            key={listItem}
            className="py-1 px-2 border-b-[0.5px] border-gray-50 hover:bg-gray-100"
          >
            <i className="fa fa-search"></i> {listItem}
          </div>
        );
      })}
    </>
  );
};
