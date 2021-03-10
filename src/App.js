import { XGrid } from '@material-ui/x-grid';
import { Paper } from '@material-ui/core';


function App() {
  const rows = [
    {
      id: 1,
      Name: 'Eva',
      age: 24,
    },
    {
      id: 2,
      Name: 'Steve',
      age: 32,
    },
    {
      id: 3,
      Name: 'Oleg',
      age: 43,
    },
  ];

  return (
    <Paper style={{ height: 600, width: '100%' }}>
      <XGrid
        columns={[
          { field: 'id' },
          { field: 'Name' },
          { field: 'age', resizable: false },
        ]}
        rows={rows}
      />
    </Paper>
  );
}

export default App;
