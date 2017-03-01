function getTemplate(data) {
	return `<h1>`+data.FULLNAME+`</h1>
    <h4>`+data.PROFESSION+`r</h4>
    <div class="col s7 offset personal-txt">
      <p class="myTxt">"`+data.QOUTE+`"</p>
    </div>
    <div class="col s5 personal-data">
      <table>
          <tr>
            <td>Date of birth</td>
            <td>`+data.INFORMATION.BIRTHDATE+`</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>`+data.INFORMATION.GENDER+`</td>
          </tr>
          <tr>
            <td>marital status</td>
            <td>`+data.INFORMATION.MARITAL+`</td>
          </tr>
          <tr>
            <td>Living</td>
            <td>`+data.INFORMATION.LIVING+`</td>
          </tr>
        </table>
    </div>`;
}

function setTemplate(data) {
	$('.m-text').append(getTemplate(data));
}