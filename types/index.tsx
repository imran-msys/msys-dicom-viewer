export interface PatientData  {
  patientId: string;
  patientName: string;
};

export interface ColumnFilterTypes {
  id: string;
  value: string;
}

export type PaginationState = {
  pageIndex: number
  pageSize: number
}