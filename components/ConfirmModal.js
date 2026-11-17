import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ConfirmModal({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
}) {
  return (
    <Modal
      animationType="fade"
      onRequestClose={onCancel}
      transparent
      visible={visible}
    >
      <View style={styles.backdrop}>
        <View style={styles.dialog}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.actions}>
            <Pressable
              accessibilityRole="button"
              onPress={onCancel}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              onPress={onConfirm}
              style={styles.confirmButton}
            >
              <Text style={styles.confirmText}>Remove</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: 'center',
    backgroundColor: 'rgba(20, 28, 23, 0.42)',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  dialog: {
    backgroundColor: '#fff',
    borderRadius: 18,
    maxWidth: 380,
    padding: 22,
    width: '100%',
  },
  title: { color: '#26372e', fontSize: 19, fontWeight: '700' },
  message: { color: '#69716b', fontSize: 14, lineHeight: 21, marginTop: 10 },
  actions: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 22 },
  cancelButton: { borderRadius: 9, paddingHorizontal: 15, paddingVertical: 11 },
  cancelText: { color: '#606b63', fontSize: 14, fontWeight: '600' },
  confirmButton: {
    backgroundColor: '#a94b43',
    borderRadius: 9,
    marginLeft: 8,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  confirmText: { color: '#fff', fontSize: 14, fontWeight: '700' },
});
