import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: "300px",
        marginBottom: "20px",
        padding: "20px",
        border: "2px solid blue",
      }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Quentin",
    last_name: "Knappen",
    email: "qknappen0@answers.com",
    gender: "Male",
    ip_address: "149.76.164.156",
  },
  {
    id: 2,
    first_name: "Glynda",
    last_name: "McKnockiter",
    email: "gmcknockiter1@sciencedaily.com",
    gender: "Female",
    ip_address: "211.213.85.89",
  },
  {
    id: 3,
    first_name: "Skell",
    last_name: "Haddleston",
    email: "shaddleston2@smugmug.com",
    gender: "Bigender",
    ip_address: "170.15.67.5",
  },
  {
    id: 4,
    first_name: "Moyna",
    last_name: "Fynes",
    email: "mfynes3@ft.com",
    gender: "Non-binary",
    ip_address: "178.109.160.15",
  },
  {
    id: 5,
    first_name: "Raven",
    last_name: "Craythorn",
    email: "rcraythorn4@reddit.com",
    gender: "Genderfluid",
    ip_address: "7.140.189.19",
  },
  {
    id: 6,
    first_name: "Enriqueta",
    last_name: "McCarty",
    email: "emccarty5@bravesites.com",
    gender: "Female",
    ip_address: "192.125.47.87",
  },
  {
    id: 7,
    first_name: "Eileen",
    last_name: "Cano",
    email: "ecano6@kickstarter.com",
    gender: "Female",
    ip_address: "248.47.99.98",
  },
  {
    id: 8,
    first_name: "Marlow",
    last_name: "Cuel",
    email: "mcuel7@opera.com",
    gender: "Male",
    ip_address: "72.206.156.111",
  },
  {
    id: 9,
    first_name: "Jaime",
    last_name: "Hinners",
    email: "jhinners8@scientificamerican.com",
    gender: "Male",
    ip_address: "54.98.163.51",
  },
  {
    id: 10,
    first_name: "Joseito",
    last_name: "Hadaway",
    email: "jhadaway9@1688.com",
    gender: "Polygender",
    ip_address: "220.234.70.144",
  },
];
export default MuiTable;
