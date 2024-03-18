import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";

const Tabledashboard = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(159, "Frozen yoghurt", 6.0, 'rejected', '$70,999'),
    createData(237, "Ice cream sandwich", 9.0, 'rejected', '$70,999'),
    createData(262, "Eclair", 16.0, 'rejected', '$70,999'),
    createData(305, "Cupcake", 3.7, 'rejected', '$70,999'),
    createData(356, "Gingerbread", 16.0, 'rejected', '$70,999'),
    createData(356, "Gingerbread", 16.0, 'rejected', '$70,999'),
    createData(356, "Gingerbread", 16.0, 'rejected', '$70,999'),
    createData(16.0, "Gingerbread", 356, 'rejected', '$70,999'),
    createData(356, "Gingerbread", 16.0, 'rejected', '$70,999'),
    createData(16.0, "Gingerbread", 356, 'rejected', '$70,999'),
  ];

  return (
    <div>
      <div
        className="card card2"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          component={Paper}
          style={{ padding: "2%", paddingTop: "3.5%", paddingBottom: "3.5%" }}
        >
          <div>
            <TableHead>
              <TableRow>
                <TableCell>Traking No</TableCell>
                <TableCell align="right">	Product Name</TableCell>
                <TableCell align="right">Total Order&nbsp;</TableCell>
                <TableCell align="left">	Status&nbsp;</TableCell>
                <TableCell align="right">Total Amount&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabledashboard;
