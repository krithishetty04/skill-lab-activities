// "use client";

// import React, { useState, ChangeEvent, FormEvent } from "react";

// interface FormData {
//   name: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   phone: string;
//   age: string;
//   gender: string;
//   address: string;
// }

// interface FormErrors {
//   name?: string;
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   password?: string;
//   confirmPassword?: string;
//   phone?: string;
//   age?: string;
//   gender?: string;
//   address?: string;
// }

// export default function LoginPage() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phone: "",
//     age: "",
//     gender: "",
//     address: "",
//   });

//   const [errors, setErrors] = useState<FormErrors>({});

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validate = (): FormErrors => {
//     const newErrors: FormErrors = {};

    
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "First Name is required";
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last Name is required";
//     }


//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

   
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     } else if (!/[A-Z]/.test(formData.password)) {
//       newErrors.password =
//         "Password must contain at least 1 uppercase letter";
//     } else if (!/[0-9]/.test(formData.password)) {
//       newErrors.password = "Password must contain at least 1 number";
//     }

    
//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Confirm Password is required";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

    
//     if (!formData.phone) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^[0-9]{10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone must be 10 digits";
//     }

   
//     if (!formData.age) {
//       newErrors.age = "Age is required";
//     } else if (Number(formData.age) < 18) {
//       newErrors.age = "Age must be 18 or above";
//     }

//     if (!formData.gender) {
//       newErrors.gender = "Please select gender";
//     }

    
//     if (!formData.address.trim()) {
//       newErrors.address = "Address is required";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       alert("Form Submitted Successfully ✅");
//       handleReset();
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       name: "",
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       phone: "",
//       age: "",
//       gender: "",
//       address: "",
//     });
//     setErrors({});
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-96"
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">
//           Registration Form
//         </h2>

      
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="border p-2 rounded mb-1 w-full"
//         />
//         {errors.name && (
//           <p className="text-red-500 text-sm mb-3">{errors.name}</p>
//         )}

        
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           placeholder="First Name"
//           className="border p-2 rounded mb-1 w-full"
//         />
//         {errors.firstName && (
//           <p className="text-red-500 text-sm mb-3">{errors.firstName}</p>
//         )}

        
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           placeholder="Last Name"
//           className="border p-2 rounded mb-1 w-full"
//         />
//         {errors.lastName && (
//           <p className="text-red-500 text-sm mb-3">{errors.lastName}</p>
//         )}

      
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="border p-2 rounded mb-1 w-full"
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm mb-3">{errors.email}</p>
//         )}

       
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="border p-2 rounded mb-1 w-full"
//         />
//         {errors.password && (
//           <p className="text-red-500 text-sm mb-3">{errors.password}</p>
//         )}

        
//         <input
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           placeholder="Confirm Password"
//           className="border p-2 rounded mb-1 w-full"
//         />
//         {errors.confirmPassword && (
//           <p className="text-red-500 text-sm mb-3">
//             {errors.confirmPassword}
//           </p>
//         )}

        
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           className="border p-2 rounded mb-1 w-full"
//         />
//         {errors.phone && (
//           <p className="text-red-500 text-sm mb-3">{errors.phone}</p>
//         )}

      
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           placeholder="Age"
//           className="border p-2 rounded mb-1 w-full"
//         />
//         {errors.age && (
//           <p className="text-red-500 text-sm mb-3">{errors.age}</p>
//         )}

      
//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           className="border p-2 rounded mb-1 w-full"
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//         {errors.gender && (
//           <p className="text-red-500 text-sm mb-3">{errors.gender}</p>
//         )}

       
//         <textarea
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           placeholder="Address"
//           className="border p-2 rounded mb-1 w-full"
//         />
//         {errors.address && (
//           <p className="text-red-500 text-sm mb-3">{errors.address}</p>
//         )}

       
//         <div className="flex gap-4 mt-4">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white p-2 rounded w-1/2"
//           >
//             Submit
//           </button>

//           <button
//             type="button"
//             onClick={handleReset}
//             className="bg-gray-300 text-gray-700 p-2 rounded w-1/2"
//           >
//             Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setApiError(null);

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

     
      await new Promise((res) => setTimeout(res, 1000));

      console.log("Form is valid", formData);
      setSuccess(true);
      setErrors({});
    } catch (err) {
      setApiError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-black">
          Login Form
        </h2>

        
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className={`w-full p-2 border rounded mb-2 text-black placeholder-gray-500 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name}</p>
        )}

      
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className={`w-full p-2 border rounded mb-2 text-black placeholder-gray-500 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}

       
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className={`w-full p-2 border rounded mb-2 text-black placeholder-gray-500 ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password}</p>
        )}

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          className={`w-full p-2 border rounded mb-2 text-black placeholder-gray-500 ${
            errors.confirmPassword
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mb-2">
            {errors.confirmPassword}
          </p>
        )}

     
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone number"
          className={`w-full p-2 border rounded mb-2 text-black placeholder-gray-500 ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mb-2">{errors.phone}</p>
        )}

       
        {apiError && (
          <p className="text-red-600 text-sm mb-2">{apiError}</p>
        )}

       
        {success && (
          <p className="text-green-600 text-sm mb-2">
            Login successful!!
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded mt-2 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}