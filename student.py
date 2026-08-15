class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def average(self):
        return sum(self.marks) / len(self.marks)


student = Student("Anita", [85, 90, 88])
print(student.name)
print(student.average())
