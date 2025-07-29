import express from "express"
import  cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

const FULL_NAME = 'aarav thakran';
const DOB = '12062005'; 
const EMAIL = 'aarav1114.be22@chitkara.edu.in';
const ROLL_NUMBER = '2210991114';

function isNumber(str) {
  return /^\d+$/.test(str);
}

function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function isSpecialChar(str) {
  return !isNumber(str) && !isAlphabet(str);
}

function alternatingCaps(str) {
  let result = '';
  let upper = true;
  for (let ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      result += upper ? ch.toUpperCase() : ch.toLowerCase();
      upper = !upper;
    } else {
      result += ch;
    }
  }
  return result;
}

app.post('/bfhl', (req, res) => {
  console.log("server error");
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(200).json({ is_success: false, message: 'Invalid input' });
    }

    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let alpha_concat = '';

    for (const item of data) {
      if (isNumber(item)) {
        const num = parseInt(item, 10);
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        sum += num;
      } else if (isAlphabet(item)) {
        alphabets.push(item.toUpperCase());
        alpha_concat += item;
      } else if (typeof item === 'string' && item.length > 0) {
        special_characters.push(item);
      }
    }
    let allAlphaChars = alpha_concat.split('').reverse().join('');
    let concat_string = alternatingCaps(allAlphaChars);

    const user_id = `${FULL_NAME.replace(/\s+/g, '_').toLowerCase()}_${DOB}`;

    res.status(200).json({
      is_success: true,
      user_id,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });
  } catch (err) {
    res.status(200).json({ is_success: false, message: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 