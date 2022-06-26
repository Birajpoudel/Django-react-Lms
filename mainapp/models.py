from django.db import models
from django.utils.html import mark_safe


# Create your models here.
#Teacher model
class Teacher(models.Model):
    full_name=models.CharField(max_length=100)
    image = models.ImageField(upload_to="teacher/",blank=True,null=True)
    email=models.EmailField()
    password=models.CharField(max_length=100)
    qualifications=models.CharField(max_length=200)
    mobile_no=models.CharField(max_length=20)
    address=models.TextField()

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name_plural="1. Teacher"

    def image_tag(self):
        return mark_safe('<img src= "%s"  width="80" />' %(self.image.url))



#Coursecategory model
class CourseCategory(models.Model):
    title=models.CharField(max_length=150)
    description=models.TextField()

    class Meta:
        verbose_name_plural="2. Course Category"



#Course Model
class  Course(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    description = models.TextField()
    class Meta:
        verbose_name_plural="3. Course"



#Student model
class Student(models.Model):
    full_name=models.CharField(max_length=100)
    # image=models.ImageField(upload_to="student/",blank=True,null=True)
    email=models.EmailField()
    password=models.CharField(max_length=100)
    qualifications=models.CharField(max_length=200)
    mobile_no=models.CharField(max_length=20)
    adress=models.TextField()
    intrested_categories=models.TextField()

    def __str__(self):
        return self.full_name


    class Meta:
        verbose_name_plural="4. Student"