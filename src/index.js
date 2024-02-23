import React, {useMemo, useCallback, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import {store} from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%', '100%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <RootStack />
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enableDynamicSizing
            enablePanDownToClose></BottomSheet>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
