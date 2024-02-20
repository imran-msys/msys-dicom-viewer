'use client';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { ColumnFilterTypes } from "@/types";

interface PatientInfoProps<TData, TValue> {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
}

const PatientInfo = <TData, TValue>({
  data,
  columns,
}: PatientInfoProps<TData, TValue>) => {


  const [columnFilters, setColumnFilters] = useState<ColumnFilterTypes[]>([]);
  const [rowSelection, setRowSelection] = useState({});


  console.log(rowSelection);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      rowSelection,
    },
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    enableMultiRowSelection: false,
  });

 //If columfilters array is empty it will handle it
 const patienId =
 columnFilters.find((f) => f?.id === "patientId")?.value || "";

// Multiple filters handling
const onInputChange = (id: string, value: string) => {
 setColumnFilters((prev) =>
   prev
     .filter((f) => f.id !== id)
     .concat({
       id,
       value,
     })
 );
};

  return (
    <div>
      <div>
        <h2 className="text-foreground text-4xl font-semibold mb-4 text-center">
          Patient Info
        </h2>
        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="Filter patient id..."
            className="max-w-sm pl-8"
            value={patienId}
            onChange={(e) => onInputChange("patientId", e.target.value)}
          />
          <SearchIcon
            className="text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 "
            size={14}
          />
        </div>
      </div>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroups) => (
              <TableRow key={headerGroups.id}>
                {headerGroups.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table?.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} style={{
                      width: cell.column.getSize(),
                    }}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PatientInfo;
