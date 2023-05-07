import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const schema = yup
    .object({
        name: yup.string().required(),
        age: yup.number().positive().integer().required(),
        sex: yup.string().required(),
        mobile: yup
            .string()
            .matches(/^[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
        emergencyNumber: yup
            .string()
            .matches(/^[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
        govIdType: yup.string().required(),
        // govIdNumber: yup.string().when("govIdType", {
        //     is: "Aadhar",
        //     then: yup
        //         .string()
        //         .matches(/^[a-zA-Z0-9]{10}$/, "Invalid Aadhar Number")
        //         .required(),
        //     otherwise: yup
        //         .string()
        //         .matches(/^[a-zA-Z0-9]{12}$/, "Invalid PAN Number")
        //         .required(),
        // }),
    })
    .required();

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const handleFormSubmit = (data) => {
        axios
            .post("https://reactjs-coding-task-be-task.onrender.com/adduser", data)
            .then((response) => console.log("response::::", response))
            .catch((error) => console.error(error));

        navigate("/table");
    };
    return (
        <>
            <div style={{ boxSizing: "border-box" }}>
                <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
                    <h3>Personal Details</h3>
                    <div>
                        <label htmlFor="name">Name</label>
                        <span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                id="name"
                                {...register("name")}
                            />
                            <p>{errors.name?.message}</p>
                        </span>
                        <label htmlFor="DOB"> Date of Birth or Age</label>
                        <span>
                            <input
                                type="text"
                                placeholder="Date of birth or age in years"
                                id="DOB"
                                {...register("age")}
                            />
                            <p>{errors.age?.message}</p>
                        </span>
                        <label htmlFor="sex">Sex</label>
                        <span>
                            <select name="sex" id="sex" {...register("sex")}>
                                <option value="">Enter sex</option>
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            <p>{errors.sex?.message}</p>
                        </span>
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile</label>
                        <span>
                            <input
                                type="number"
                                placeholder="Enter Mobile"
                                id="mobile"
                                {...register("number")}
                            />
                            <p>{errors.number?.message}</p>
                        </span>
                        <label htmlFor="govIdType">Govt issued ID</label>
                        <section>
                            <span>
                                <select
                                    name="id-type"
                                    id="govIdType"
                                    {...register("govIdType")}
                                >
                                    <option value="">ID type</option>
                                    <option value="Aadhar">Aadhar</option>
                                    <option value="PAN">PAN</option>
                                </select>
                                <p>{errors.govIdType?.message}</p>
                            </span>
                            <span>
                                <input
                                    type="text"
                                    placeholder="Enter Govt ID"
                                    name="govIdNumber"
                                    {...register("govIdNumber")}
                                />
                                <p>{errors.govIdNumber?.message}</p>
                            </span>
                        </section>
                    </div>
                    <h3> Contact details </h3>
                    <div>
                        <label htmlFor="guardian">Guardian Details</label>
                        <section>
                            <select name="guardian" id="guardian" {...register("guardian")}>
                                <option value="">Enter Label</option>
                                <option value="father">Father</option>
                                <option value="mother">Mother</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Enter Guardian Name"
                                {...register("guardianName")}
                            />
                        </section>
                        <label htmlFor="email"> Email </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            {...register("guardianEmail")}
                        />
                        <label htmlFor="emergencyContact"> Emergency Contact Number</label>
                        <span>
                            <input
                                type="number"
                                placeholder="Enter Emergency no."
                                {...register("emergencyNumber")}
                            />
                            <p>{errors.emergencyNumber?.message}</p>
                        </span>
                    </div>
                    <h3>Address Details</h3>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            placeholder="Address"
                            id="address"
                            style={{ width: "50%" }}
                            {...register("address")}
                        />
                        <label htmlFor="state"> State </label>
                        <select name="state" id="state" {...register("state")}>
                            <option value="">Enter State</option>
                            <option value="odisha">Odisha</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="punjab">Punjab</option>
                        </select>
                        <label htmlFor="city">City</label>
                        <select name="city" id="city" {...register("city")}>
                            <option value="">Enter city/town/village</option>
                            <option value="cuttack">Cuttack</option>
                            <option value="bhubaneswar">Bhubaneswar</option>
                            <option value="delhi">Delhi</option>
                            <option value="banglore">Banglore</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            value="India"
                            {...register("country")}
                        />
                        <label htmlFor="pincode">Pincode</label>
                        <input
                            type="number"
                            placeholder="Enter Pincode"
                            id="pincode"
                            {...register("pincode")}
                        />
                    </div>
                    <h3>Other Details</h3>
                    <div>
                        <label htmlFor="occupation">Occupation</label>
                        <input
                            type="occupation"
                            placeholder="Enter occupation"
                            id="occupation"
                            {...register("occupation")}
                        />
                        <label htmlFor="religion">Religion</label>
                        <select name="religion" id="religion" {...register("religion")}>
                            <option value="">Enter religion</option>
                            <option value="hindu">Hindu</option>
                            <option value="muslim">Muslim</option>
                            <option value="christian">Christian</option>
                        </select>
                        <label htmlFor="maritialStatus">Maritial Status</label>
                        <select
                            name="maritialStatus"
                            id="maritialStatus"
                            {...register("maritialStatus")}
                        >
                            <option value="">Enter maritial status</option>
                            <option value="married">Married</option>
                            <option value="unmarried">Un-married</option>
                            <option value="divorcee">Divorcee</option>
                        </select>
                        <label htmlFor="bloodGroup">Blood Group</label>
                        <select
                            name="bloodGroup"
                            id="bloodGroup"
                            {...register("blood-group")}
                        >
                            <option value="">Group</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="nationality">Nationality</label>
                        <input
                            type="nationality"
                            name="nationality"
                            id="nationality"
                            value="India"
                            {...register("nationality")}
                        />
                    </div>
                    <div className="buttons">
                        <button type="submit">Submit</button>
                        <button type="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
