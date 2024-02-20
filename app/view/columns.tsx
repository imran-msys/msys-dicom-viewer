"use client";

import { Input } from "@/components/ui/input";
import { PatientData } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import IndeterminateRadioButton from "./indeterminate-radio-button";

export const columns: ColumnDef<PatientData>[] = [
  {
    accessorKey: "patientIndex",
    header: "Patient Index",
    cell: (props) => {
      return <p className="">{props.row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patientId",
    header: "Patient ID",
  },
  {
    accessorKey: "patientName",
    header: "Patient Name",
  },
  {
    accessorKey: "select",
    header: "Select",
    cell: ({ row }) => {
      return (
        <div className="px-1">
          <IndeterminateRadioButton
            value={row.original.patientId}
            className="w-4 h-4 bg-foreground text-foreground cursor-pointer placeholder:text-primary"
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      );
    },
  },
];
