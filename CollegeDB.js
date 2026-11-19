// 1. DATABASE AND COLLECTION CREATION
use CollegeDB
db.createCollection("Students")
show collections

// 2. INSERT STUDENT RECORDS
db.Students.insertMany([
  {rollNo: 101, name: "Amit Kumar", department: "BCA", age: 21, marks: 85},
  {rollNo: 102, name: "Neha Sharma", department: "BCA", age: 20, marks: 78},
  {rollNo: 103, name: "Rahul Verma", department: "MCA", age: 22, marks: 92},
  {rollNo: 104, name: "Priya Singh", department: "BCA", age: 21, marks: 74},
  {rollNo: 105, name: "Nishant Oraon", department: "BCA", age: 21, marks: 88},
  {rollNo: 106, name: "Rohit Kumar", department: "MCA", age: 23, marks: 69},
  {rollNo: 107, name: "Sneha Gupta", department: "BCA", age: 20, marks: 81},
  {rollNo: 108, name: "Ankit Das", department: "MCA", age: 22, marks: 76},
  {rollNo: 109, name: "Pooja Kumari", department: "BCA", age: 21, marks: 90},
  {rollNo: 110, name: "Karan Singh", department: "MCA", age: 22, marks: 80},
  {rollNo: 111, name: "Simran Kaur", department: "BCA", age: 20, marks: 65},
  {rollNo: 112, name: "Arjun Mehta", department: "MCA", age: 23, marks: 68}
])
db.Students.countDocuments()

// 3. DISPLAY ALL RECORDS
db.Students.find().pretty()

// 4. SEARCH STUDENTS
db.Students.find({name: "Nishant Oraon"})
db.Students.find({rollNo: 103})
db.Students.find({name: /^A/})

// 5. UPDATE STUDENT DETAILS
db.Students.updateOne(
  {rollNo: 106},
  {$set: {marks: 72}}
)
db.Students.find({rollNo: 106})

// 6. DELETE STUDENT RECORD
db.Students.deleteOne({rollNo: 110})
db.Students.countDocuments()
db.Students.find({rollNo: 110})

// 7. FILTER BY DEPARTMENT
db.Students.find({department: "BCA"})

// 8. FILTER AND SORT BY MARKS
db.Students.find({marks: {$gte: 80}}).sort({marks: -1})

// 9. SORT NAMES ALPHABETICALLY
db.Students.find(
  {},
  {_id: 0, rollNo: 1, name: 1}
).sort({name: 1}).limit(5)

// 10. AGGREGATION - AVERAGE MARKS
db.Students.aggregate([
  {$group: {
    _id: null,
    averageMarks: {$avg: "$marks"}
  }}
])

// 11. FINAL VERIFICATION
db.Students.countDocuments()
db.Students.find()
db.getName()
