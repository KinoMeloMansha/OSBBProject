<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>

<%--<form action="addUserVote" method="post">--%>
<%----%>
<%--<input type="hidden" name="id">--%>

<%--<form:radiobutton action="addUserVote" path="userVote" value="True"> ЗА </form:radiobutton>--%>
<%--<form:radiobutton action="addUserVote" path="userVote" value="False"> Проти</form:radiobutton>--%>
<%--<input type="submit" value="Голосувати">--%>


<form action="/addUserVote" method="post">
    <input type="hidden" name="id">

    <input type="radio" name="userVote" value="True"> За
    <input type="radio" name="userVote" value="False"> Проти
    <input type="submit" value="Голосувати">
</form>


</form>