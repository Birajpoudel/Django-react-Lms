from django.contrib import admin
from . import models

# Register your models here.





class TeacherAdmin(admin.ModelAdmin):
    list_display = ('full_name', )
admin.site.register(models.Teacher, TeacherAdmin)

class StudentAdmin(admin.ModelAdmin):
    list_display = ('full_name', )
admin.site.register(models.Student, StudentAdmin)

class CourseAdmin(admin.ModelAdmin):
    list_display = ('title',)
admin.site.register(models.Course, CourseAdmin)

class CourseCategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)
admin.site.register(models.CourseCategory, CourseCategoryAdmin)