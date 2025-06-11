import { StyleSheet } from 'react-native';

export const SensorsStyles= StyleSheet.create({
  card: {
  backgroundColor: '#E9DAF1',
  marginTop: 40,
  padding:1,
  height: 150,
  width: 200,
  borderRadius: 15,
  alignItems: 'center',
  },
  name: {
    color:'#3C0A6D',
    fontSize: 20,
    textAlign:'center',
    fontWeight: 'bold',
    marginBottom: 12,

  },
  value: {
    marginTop:20,
    fontSize: 18,
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: '600',
  },
  ok: {
    color: 'green',
  },
  alerta: {
    color: 'red',
  },
   pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#6A1B9A',
  },
});
