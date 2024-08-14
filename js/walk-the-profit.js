function createSortedTable(dataArray) {
    dataArray.sort((a, b) => {
        let totalEarningsA = parseFloat(a["TOTAL EARNINGS"]);
        let totalEarningsB = parseFloat(b["TOTAL EARNINGS"]);
        let totalEarningsDiff = totalEarningsA - totalEarningsB;

        return totalEarningsDiff;
    })

    let htmlContent = "";
	let columns = ["NAME", "TITLE", "DEPARTMENT NAME", "TOTAL EARNINGS"];
	for(let i = 0; i < 10; i++) {
		htmlContent += "<tr>";
		for(let j = 0; j < columns.length; j++) {
			htmlContent += `<td>${
        columns[j] === "TOTAL EARNINGS"
          ? `$${dataArray[i][columns[j]]}`
          : dataArray[i][columns[j]]
      }</td>`;
		}
		htmlContent += "</tr>";
	}
	return htmlContent;
}

function calculateAverageSalary(array, number) {
    let grandTotalEarnings = 0;
    const topXEmployees = array.slice(0, number);

    for(let employee of topXEmployees){
        grandTotalEarnings += parseFloat(employee["TOTAL EARNINGS"]);
    }

    const average = grandTotalEarnings / number;

    return Math.round(average * 100) / 100;
}