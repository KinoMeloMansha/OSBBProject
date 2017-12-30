<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>

<div class="col-lg-12 col-md-12 col-sm-12">
<p>Голосування</p>

<c:forEach items="${votingShowAll}" var="Voting">


    <div class="col-lg-8 col-md-6 col-sm-6">
        <h1>
            <a href="/newsPage">Ім'я голосування:${Voting.votingName}</a>
        </h1>
        <p>${News.newsTime}</p>
        <p>Короткий опис голосування: ${News.votingShort}</p>
        <p>Текст голосування: ${News.votingText}</p>

        <div>
        <p>За: ${News.votingTrue}</p>
        <p>Проти: ${News.votingFalse}</p>
        </div>

        <%@include file="index-userVoit-User.jsp" %>

    </div>


    </div>
</c:forEach>