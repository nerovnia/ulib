export const decodeBase64 = (base64String: string): Uint8Array => {
  const binaryString = atob(base64String);

  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([bytes], { type: 'image/png' });
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
};

export const decodeBase64Old = (base64String: string): Uint8Array => {
  const binaryString = atob(base64String);

  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([bytes], { type: 'image/png' });
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
};
