import axios from 'axios';

const postMeasure = async (formData, setNoseBridgeWidth, setTempleWidth) => {
  axios.post('https://opticus-306823.ue.r.appspot.com/measure', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => {
    console.log(res);
    setTempleWidth(res.data.measurements[0]);
    setNoseBridgeWidth(res.data.measurements[1]);
  }).catch((error) => {
    console.log(error);
  });
}

export default postMeasure;
