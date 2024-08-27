import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addData } from "../slices/personalDataSlice";

const PersonalData = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    if (isValid) {
      //console.log(values);
      dispatch(addData(values));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="block font-bold">
            Name
          </label>
          <input
            className="block border-2 border-slate-200 rounded-lg w-full h-12 font-bold px-4"
            type="text"
            name="name"
            id="name"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <p className="text-red-600 font-bold text-right">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="surname" className="block font-bold">
            Surname
          </label>
          <input
            className="block border-2 border-slate-200 rounded-lg w-full h-12 font-bold px-4"
            type="text"
            name="surname"
            id="surname"
            {...register("surname", { required: "This field is required" })}
          />
          {errors.name && (
            <p className="text-red-600 font-bold text-right">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="submit"
            value={"Send"}
            className="bg-blue-500 text-white py-2 px-4"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
