

// Reminder: to include me from the html file, use the following:
// <script src = dokiTableBehavior.js></script>
// Remember to include file path in script source (as needed).
// I am in Doki/js.

// Want a clickable dropdoown for table.
// Reference: https://www.w3schools.com/howto/howto_js_filter_dropdown.asp

function sortFri(n)
  {

    console.log(1+1);


    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("FriSched");
    switching = true;

    /* ascending */
    dir = "asc";

    /* loop for switch */
    while (switching)
    {
      /* no switching done at first */
      switching = false;
      rows = table.rows;

      /* Go through alltable rows except header row */
      for (i = 1; i <(rows.length-1); i++)
      {
        /* No switching at first */
        shouldSwitch = false;

        /* compare first two; one from current row one from following */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        /* check if should switch */
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
        {
          /*set switch to true and break */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch)
      {
        rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
        switching = true;
        switchcount++;
      }
    }
  }
