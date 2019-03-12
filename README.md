# Dojo Roll

A simple app I'm building to practice React and help take attendance at my karate club.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Types

```javascript
class Person {
  name, // string
  rank, // Rank type
  attendance: [], // array of Training IDs
  isStudent, // boolean
  fees: [], // array of Fees
  notes: '' //string
}

class Fee {
  amount, // in cents
  type, // fee Type
  period, //period type¥
  notes //string
}

enum Rank {
  OTHER,
  BEGINNER,
  BLUE_BELT,
  BLUE_BELT_TAB,
  YELLOW_BELT,
  YELLOW_BELT_TAB,
  GREEN_BELT,
  GREEN_BELT_TAB,
  BROWN_BELT,
  BROWN_BELT_TAB,
  BROWN_BELT_TWO_TAB,
  SHODAN,
  NIDAN,
  SANDAN,
  YONDAN,
  GODAN,
  ROKUDAN,
  NANADAN,
  SHICHIDAN,
  HACHIDAN,
  KYUDAN,
  JYUDAN
}

enum FeeType {
  MONTHLY_JAN,
  MONTHLY_FEB,
  MONTHLY_MAR,
  MONTHLY_APR,
  MONTHLY_MAY,
  MONTHLY_JUN,
  MONTHLY_JUL,
  MONTHLY_AUG,
  MONTHLY_SEP,
  MONTHLY_OCT,
  MONTHLY_NOV,
  MONTHLY_DEC,
  SEMESTER_ONE,
  SEMESTER_TWO,
  ANNUAL,
  BULK
}

class Training {
  type, // TrainingType
  date, // Date
  ID // unique id
}

enum TrainingType {
  BEGINNERS,
  REGULAR,
  GRADING,
  OTHER
}
```
