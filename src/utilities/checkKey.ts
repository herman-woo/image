//Function to check the value of height/weight key and return a string or number
const checkKey = (oldValue: string, type: string): string | number => {
  let newValue = parseInt(oldValue);
  let html = '';
  if (isNaN(newValue)) {
    //if key entered is not a number, value will be true
    if (oldValue === undefined) {
      //if value is undefined, notify user
      html += `<h5>No ${type} entered, default value used 200</h5>`;
      return html;
    } else {
      //else a string was entered
      html += `<h5>Invalid ${type} key, default value used = 200</h5>`;
      return html;
    }
  } else {
    if (newValue.toString() !== oldValue) {
      html += `<h5>Mixed characters and numbers in ${type} key, default value used = 200</h5>`;
      return html;
    } else {
      return newValue;
    }
  }
};

export default checkKey;
