import CSS from 'csstype';

interface IStyleSheet {
  [key: string]: CSS.Properties,
}

export const styles: IStyleSheet = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    marginBottom: '10px',
  },
  error: {
    fontWeight: 'bold',
    fontSize: '32px',
    color: 'red',
  },
  success: {
    fontWeight: 'bold',
    fontSize: '32px',
    color: 'green',
  },
  footer: {
    marginTop: '10px',
    display: 'flex',
  }
}