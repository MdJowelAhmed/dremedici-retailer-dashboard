// import React from "react";
// import { FaCalendarDay, FaDollarSign } from "react-icons/fa";
// import { HiMiniUsers } from "react-icons/hi2";
// import { MdArrowUpward, MdOutlineHome } from "react-icons/md";
// import { PiHouseLine } from "react-icons/pi";
// import { Bar } from "react-chartjs-2";
// import LineChart from "./LineChart"; 
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import OrderTable from "../../components/home/OrderTable";
// import SalesLeaderBoard from "../../components/home/SalesLeaderBoard";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Home = () => {
//   const data = {
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         label: "Subscriptions",
//         data: [64, 27, 83, 90, 87, 85, 70, 40, 32, 74, 65, 70],
//         backgroundColor: "#3FC7EE",
//         borderColor: "#A1A1A1",
//         borderWidth: 1,
//         barThickness: 24,
//         maxBarThickness: 24,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//           color: "#A1A1A1",
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 20,
//           suggestedMin: 0,
//           suggestedMax: 100,
//         },
//         grid: {
//           display: true,
//           lineWidth: 2,
//         },
//       },
//     },
//   };

//   return (
//     <div className="">
//       <div className="flex gap-10 rounded-lg">
//         {/* Line Chart Section */}
//         <div className="flex-1 w-2/3 p-6 rounded-lg bg-gradient-to-r from-primary to-secondary">
//           <h2 className="mb-4 text-xl font-bold text-white">Total Revenue</h2>
//           <LineChart />
//         </div>
//         {/* Card Section */}
//         <div className="grid grid-cols-2 w-1/3 gap-6 h-[340px] bg-gradient-to-r from-primary  to-secondary p-6 rounded-lg">
//           <div className="flex items-center justify-between gap-4 px-2 py-0 bg-white rounded-lg">
//             <div className="flex items-center gap-3">
//               <div>
//                 <h2 className="mb-3 text-xl font-bold text-center">
//                   Total Sales
//                 </h2>
//                 <h3 className="text-3xl font-bold text-primary">$12100</h3>
//               </div>
//               <div className="w-16 h-16 rounded-full text-[#37C779] flex items-center justify-center">
//                 <MdArrowUpward color="" size={24} />
//                 <p>12%</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-between gap-4 px-2 py-0 bg-white rounded-lg">
//             <div className="flex items-center gap-3">
//               <div>
//                 <h2 className="mb-3 text-xl font-bold text-center">
//                   Total Order
//                 </h2>
//                 <h3 className="text-3xl font-bold text-primary">$12100</h3>
//               </div>
//               <div className="w-16 h-16 rounded-full text-[#37C779] flex items-center justify-center">
//                 <MdArrowUpward color="" size={24} />
//                 <p>12%</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-between gap-4 px-2 py-0 bg-white rounded-lg">
//             <div className="flex items-center gap-3">
//               <div>
//                 <h2 className="mb-3 text-xl font-bold text-center">
//                   Commission
//                 </h2>
//                 <h3 className="text-3xl font-bold text-primary">$12100</h3>
//               </div>
//               <div className="w-16 h-16 rounded-full text-[#37C779] flex items-center justify-center">
//                 <MdArrowUpward color="" size={24} />
//                 <p>12%</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-between gap-4 px-2 py-0 bg-white rounded-lg">
//             <div className="flex items-center gap-3">
//               <div>
//                 <h2 className="mb-3 text-xl font-bold text-center">
//                   Retailers
//                 </h2>
//                 <h3 className="text-3xl font-bold text-primary">$12100</h3>
//               </div>
//               <div className="w-16 h-16 rounded-full text-[#37C779] flex items-center justify-center">
//                 <MdArrowUpward color="" size={24} />
//                 <p>12%</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 mt-16 gap-x-10">
//         <OrderTable />
//         <SalesLeaderBoard />
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useState } from "react";
import {
  Table,
  InputNumber,
  Button,
  Select,
  Modal,
  Input,
  Pagination,
} from "antd";
import { MinusOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const initialData = [
  {
    key: 1,
    name: "Product-1",
    category: "Cigar",
    inStock: true,
    price: 200,
    quantity: 50,
  },
  {
    key: 2,
    name: "Product-1",
    category: "Accessories",
    inStock: false,
    price: 200,
    quantity: 50,
  },
  {
    key: 3,
    name: "Product-1",
    category: "Cigar",
    inStock: true,
    price: 200,
    quantity: 50,
  },
  {
    key: 4,
    name: "Product-1",
    category: "Accessories",
    inStock: true,
    price: 200,
    quantity: 50,
  },
  {
    key: 5,
    name: "Product-1",
    category: "Cigar",
    inStock: true,
    price: 200,
    quantity: 50,
  },
];

const Home = () => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [retailer, setRetailer] = useState("Alice Johnson");
  const [note, setNote] = useState("");

  const handleQuantityChange = (key, value) => {
    setData(
      data.map((item) =>
        item.key === key ? { ...item, quantity: value } : item
      )
    );
  };

  const columns = [
    { title: "SL", dataIndex: "key", key: "sl", align: "center" },
    { title: "Product Name", dataIndex: "name", key: "name", align: "center" },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center",
    },
    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
      align:"center",
      render: (val) => (val ? "Yes" : "No"),
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
      align:"center",
      render: (val) => `$${val}`,
    },
    {
      title: "Quantity",
      key: "quantity",
      align:"center",
      render: (_, record) => (
        <div className="flex items-center justify-center gap-2">
          <Button
            icon={<MinusOutlined />}
            onClick={() =>
              handleQuantityChange(record.key, record.quantity - 1)
            }
          />
          <span>{record.quantity}</span>
          <Button
            icon={<PlusOutlined />}
            onClick={() =>
              handleQuantityChange(record.key, record.quantity + 1)
            }
          />
        </div>
      ),
    },
    {
      title: "Total Amount",
      key: "total",
      align:"center",
      render: (_, record) => `$${record.quantity * record.price}`,
    },
  ];

  const totalBox = data.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = data.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex items-center justify-end">
        <Input
          className="w-1/4 p-2"
          prefix={<SearchOutlined />}
          placeholder="Search Product"
        />
      </div>

      <div className="p-5 bg-primary rounded-xl">
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 5 }}
          bordered
          className="mb-4"
        />
      </div>

      <div className="flex justify-end gap-4 mb-2 ">
        <div className="w-4/12 p-4 shadow-md bg-primary rounded-xl">
          <h2 className="mb-2 text-xl font-semibold text-white">Choose Retailer</h2>
          <Select
            value={retailer}
            onChange={setRetailer}
            className="w-full mb-2"
          >
            <Option value="Alice Johnson">Alice Johnson</Option>
          </Select>
          <Input.TextArea
            rows={2}
            placeholder="Write a Note For this order"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div className="flex justify-end gap-2 mt-4">
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="primary" onClick={() => setIsModalOpen(false)} className="bg-third">
              Add Retailer
            </Button>
          </div>
        </div>

        <div className="w-3/12 p-4 shadow-md bg-primary rounded-xl">
          <h2 className="mb-4 text-xl font-semibold text-white">Shopping Cart</h2>
          <p className="text-white">Total Boxes: {totalBox}</p>
          <p className="text-white">Total amount: ${totalAmount}</p>
          <div className="flex items-center justify-between mt-12">
            <Button >Remove All</Button>
            <Button type="primary" className="bg-third">Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


