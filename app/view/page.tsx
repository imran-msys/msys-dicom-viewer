import PatientDetails from "./patient-details";
import PatientDCM from "./patient-dcm";
import Container from "@/components/container";
import PatientInfo from "./patient-info";
import { columns } from "./columns";
import { patientData } from "@/data";


const page = () => {
  return (
    <div className="mb-24">
      <Container>
        <PatientInfo
          columns={columns}
          data={patientData}
        />
        <PatientDetails />
        <PatientDCM />
      </Container>
    </div>
  );
};

export default page;
