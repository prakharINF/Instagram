import {View, Text} from 'react-native';
import React, {useRef, useMemo, useCallback} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const CustomBottomSheet = () => {
  const bottomSheetRef = useRef < BottomSheet > null;

  const snapPoints = useMemo(() => ['50%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      />
    </View>
  );
};

export default CustomBottomSheet;
