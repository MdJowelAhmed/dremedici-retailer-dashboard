import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Tooltip,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  EyeOutlined,
  SyncOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const SalesRepsManagementTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      image: "https://i.ibb.co.com/8gh3mqPR/Ellipse-48-1.jpg",
      email: "example@email.com",
      retailer: 5,
      sales: "$300",
      commission: "$200",
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      image: "https://i.ibb.co.com/8gh3mqPR/Ellipse-48-1.jpg",
      email: "john@email.com",
      retailer: 3,
      sales: "$500",
      commission: "$250",
      status: "Inactive",
    },
    // ... rest of your data
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    salesRep: "",
    targetAmount: "",
  });

  // Delete confirmation modal
  const showDeleteConfirm = (record) => {
    setRecordToDelete(record);
    setIsDeleteModalVisible(true);
  };

  const handleDelete = () => {
    setData(data.filter((item) => item.id !== recordToDelete.id));
    setIsDeleteModalVisible(false);
    message.success("Retailer deleted successfully");
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
    setRecordToDelete(null);
  };

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Selected Sales Rep:", formData.salesRep);
    console.log("Target Amount:", formData.targetAmount);
    handleClose();
  };

  const showStatusModal = (record) => {
    setSelectedRecord(record);
    form.setFieldsValue({ status: record.status });
    setIsStatusModalVisible(true);
  };

  const handleStatusCancel = () => {
    setIsStatusModalVisible(false);
    form.resetFields();
  };

  const handleStatusUpdate = (values) => {
    setData(
      data.map((item) =>
        item.id === selectedRecord.id
          ? { ...item, status: values.status }
          : item
      )
    );
    handleStatusCancel();
    message.success("Status updated successfully");
  };

  const showModal = (record = null) => {
    setEditingId(record ? record.id : null);
    form.setFieldsValue(
      record || {
        name: "",
        email: "",
        retailer: "",
        sales: "",
        commission: "",
        status: "",
      }
    );
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSave = (values) => {
    if (editingId) {
      setData(
        data.map((item) =>
          item.id === editingId ? { ...item, ...values } : item
        )
      );
      message.success("Retailer updated successfully");
    } else {
      setData([...data, { id: data.length + 1, ...values }]);
      message.success("Retailer added successfully");
    }
    handleCancel();
  };

  const columns = [
    { title: "SL", dataIndex: "id", key: "id", align: "center" },
    {
      title: "Retailer Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    { title: "Email", dataIndex: "email", key: "email", align: "center" },
    {
      title: "Total Orders",
      dataIndex: "retailer",
      key: "retailer",
      align: "center",
    },
    {
      title: "Subscription Tier",
      dataIndex: "sales",
      key: "sales",
      align: "center",
    },
    {
      title: "Total Purchased",
      dataIndex: "commission",
      key: "commission",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div className="flex gap-4 justify-center">
            <button
              onClick={() =>
                navigate(`/retailer/${record.id}`, { state: record })
              }
              className=" cursor-pointer border border-primary px-2 py-1.5 rounded-md"
            >
              View Details
            </button>

          {/* <Tooltip title="Update Status">
            <SyncOutlined
              onClick={() => showStatusModal(record)}
              className="text-green-500 text-lg cursor-pointer hover:text-green-700"
            />
          </Tooltip>

          <Tooltip title="Delete">
            <DeleteOutlined
              onClick={() => showDeleteConfirm(record)}
              className="text-red-500 text-lg cursor-pointer hover:text-red-700"
            />
          </Tooltip> */}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Assign Retailer</h1>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <Modal
              title="Assign Target to Sales Rep"
              open={isModalOpen}
              onOk={handleSubmit}
              onCancel={handleClose}
              okText="Submit"
              cancelText="Cancel"
            >
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">
                  Set Sales Reps
                </label>
                <select
                  name="salesRep"
                  value={formData.salesRep}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select Sales Rep</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Jane Smith">Jane Smith</option>
                  <option value="Mark Johnson">Mark Johnson</option>
                </select>
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">
                  Target Amount
                </label>
                <input
                  type="number"
                  name="targetAmount"
                  value={formData.targetAmount}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter target amount"
                />
              </div>
            </Modal>
          </div>
          {/* <Button
            type="primary"
            onClick={() => showModal()}
            icon={<PlusOutlined />}
            className="bg-gradient-to-r from-primary to-secondary h-10 font-bold flex items-center"
          >
            Add Retailer
          </Button> */}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-secondary pt-6 px-6 rounded-xl">
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 12 }}
          bordered={false}
          size="small"
          rowClassName="custom-row"
        />
      </div>

      {/* Add/Edit Modal */}
      <Modal
        title={editingId ? "Edit Sales Rep" : "Add Sales Rep"}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={() => form.submit()}
        okText={editingId ? "Save Changes" : "Add Sales Rep"}
        okButtonProps={{
          style: {
            background: "linear-gradient(to right, #4E9DAB, #336C79)",
            border: "none",
            color: "white",
          },
        }}
        cancelButtonProps={{
          style: {
            background: "#D32F2F",
            border: "none",
            color: "white",
          },
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item
            label="Sales Rep Name"
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Assigned Retailer"
            name="retailer"
            rules={[{ required: true, message: "Please enter retailer count" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Total Sales"
            name="sales"
            rules={[{ required: true, message: "Please enter total sales" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Commission"
            name="commission"
            rules={[{ required: true, message: "Please enter commission" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please enter status" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {/* Status Update Modal */}
      <Modal
        title="Update Status"
        open={isStatusModalVisible}
        onCancel={handleStatusCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleStatusUpdate}>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select a status!" }]}
          >
            <Select placeholder="Select status">
              <Select.Option value="active">Active</Select.Option>
              <Select.Option value="inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            icon={<SyncOutlined />}
            className="bg-gradient-to-r from-primary to-secondary h-10 font-bold"
          >
            Update
          </Button>
        </Form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        title="Confirm Delete"
        open={isDeleteModalVisible}
        onOk={handleDelete}
        onCancel={handleDeleteCancel}
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{
          danger: true,
          type: "primary",
        }}
      >
        <p>Are you sure you want to delete {recordToDelete?.name}?</p>
        <p>This action cannot be undone.</p>
      </Modal>
    </div>
  );
};

export default SalesRepsManagementTable;
