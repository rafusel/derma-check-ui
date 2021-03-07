import axios from 'axios';

const postMeasure = async (formData) => {
  let templeWidth;
  let noseBridgeWidth;

  axios.post('https://opticus-306823.ue.r.appspot.com/measure', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => {
    templeWidth = res.data.measurements[0]
    noseBridgeWidth = res.data.measurements[1]
  }).catch((error) => {
    console.log(error);
    templeWidth = null;
    noseBridgeWidth = null;
  });

  if (templeWidth && noseBridgeWidth) return [templeWidth, noseBridgeWidth];
  return null;
}

export default postMeasure;
