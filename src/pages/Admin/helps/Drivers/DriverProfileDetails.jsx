import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Eye,
  Download,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CreditCard,
  FileText,
} from "lucide-react";
import Modal from "../../../../shared/Modal";
import DocumentView from "./DocumentView";

// Sample driver data - replace with API in real app
const getDriverById = (id) => {
  const drivers = {
    1: {
      id: 1,
      name: "Jubayer Ahmad",
      email: "ahmad@jubayer@gmail.com",
      phone: "+1 (555) 123-4567",
      address: "123 Innovation Drive, Tech Valley, CA 94025",
      status: "Pending Review",
      profileImage: "/placeholder.svg?height=80&width=80",
      license: {
        dlNumber: "DL123456789",
        licenseNumber: "License Number",
        expiryDate: "8/15/2026",
        yearsExperience: "5 Years",
        drivingExperience: "Driving Experience",
      },
      documents: [
        { name: "Driver's License", type: "license" },
        { name: "NID Card(National ID Card)", type: "nid" },
        { name: "Medical Report", type: "medical" },
      ],
    },
  };
  return drivers[id] || null;
};

export default function DriverDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const driver = getDriverById(id);
  const [viewDocOpen, setViewDocOpen] = useState(false);
  const [currentDocToOpen, setCurrentDocToOpen] = useState(null);

  const handleApprove = () => console.log("Approving driver:", driver.name);
  const handleDeny = () => console.log("Denying driver:", driver.name);
  const handleViewDocument = (docType) => {
    setCurrentDocToOpen({ docName: docType });
    setViewDocOpen(true);
    console.log("Viewing document:", docType);
  };
  const handleDownloadDocument = (docType) =>
    console.log("Downloading document:", docType);

  if (!driver) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Driver not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-200 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="px-5 md:px-20">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-gray-600 hover:text-gray-900 flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="p-6 flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-500">
              <img
                src={driver.profileImage}
                alt={driver.name}
                className="w-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {driver.name}
              </h1>
              <span className="inline-block mt-2 bg-[#B4BBDF] text-black text-sm px-3 py-1 rounded">
                {driver.status}
              </span>
            </div>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Personal Info */}
          <div className="bg-[#DBDEEF] rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">
              Personal Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{driver.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{driver.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                <span className="text-gray-700">{driver.address}</span>
              </div>
            </div>
          </div>

          {/* License Info */}
          <div className="bg-[#DBDEEF] rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">
              License Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">DL Number</p>
                  <p className="text-gray-700">{driver.license.dlNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">License Number</p>
                  <p className="text-gray-700">
                    {driver.license.licenseNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Expiry Date</p>
                  <p className="text-gray-700">{driver.license.expiryDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Driving Experience</p>
                  <p className="text-gray-700">
                    {driver.license.yearsExperience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-[#DBDEEF] rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">
            Company Information
          </h2>
          <div className="space-y-4">
            {driver.documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">{doc.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleViewDocument(doc.type)}
                    className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-100 hover:cursor-pointer"
                  >
                    <Eye className="w-4 h-4 inline-block mr-1" />
                    View
                  </button>
                  <button
                    onClick={() => handleDownloadDocument(doc.type)}
                    className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-100 hover:cursor-pointer"
                  >
                    <Download className="w-4 h-4 inline-block mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className=" p-6 text-center">
          <p className="text-gray-600 mb-6">
            If you approve this application please click continue
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDeny}
              className="px-8 py-2 border border-gray-500 text-gray-700 rounded hover:bg-gray-300 hover:cursor-pointer"
            >
              Deny
            </button>
            <button
              onClick={handleApprove}
              className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={viewDocOpen}
        onClose={() => {
          setViewDocOpen(false);
          setCurrentDocToOpen(null);
        }}
      >
        <DocumentView docName={currentDocToOpen} />
      </Modal>
    </div>
  );
}
