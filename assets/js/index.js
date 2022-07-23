// Confirms that the user has submitted new information
$("#add_user").submit(function (event) {
  alert("Data inserted successfully");
});

// Confirms updated their information
$("#update_user").submit(function (event) {
  // prevents the submit button's default behavior
  event.preventDefault();

  // stores the user's information from separate elements into an array of names
  const unindexed_array = $(this).serializeArray();
  console.log(`unindexed_array`, unindexed_array);

  // initializes data as an array
  const data = {};

  // stores the unindexed array into a real array, formats the data
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  // requests the user's specific information using their id from the route folder
  // then updates the information using a PUT method
  const request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  // when request has been completed, alerts the user that the information has been successfully updated
  $.ajax(request).done(function (response) {
    alert("Data updated successfully");
  });
});

// if the window is currently the home page
if (window.location.pathname == "/") {
  // add a delete class to the following elements
  $ondelete = $(".table tbody td a.delete");
  // when the delete button has been clicked
  $ondelete.click(function () {
    console.log(`clicked`);
    // grab add a data attribute called "data-id"
    const id = $(this).attr("data-id");
    // request will grab the element with that id
    // and delete it using a DELETE method
    const request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    // when the record has been deleted
    if (confirm("Confirm record deletion")) {
      // in other words when the request has been completed
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully");
        // the page will reload and the record will be gone
        location.reload();
      });
    }
  });
}
