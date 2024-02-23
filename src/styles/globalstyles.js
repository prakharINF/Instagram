import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  center: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  descText: {
    fontSize: 14,
    color: '#fff',
  },
  btnTextSM: {
    fontSize: 12,
    color: '#fff',
  },
  followBtn: {
    backgroundColor: 'rgb(69, 69, 69)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  followText: {
    fontSize: 16,
    color: '#fff',
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: '#fff'
  },
  headerIcon: {
    width: 26,
    height: 26,
    tintColor: '#fff',
  },
  headerIconRight: {
    marginLeft: 18,
    tintColor: '#fff',
    width: 26,
    height: 26,
  },
});

export default globalStyles;
