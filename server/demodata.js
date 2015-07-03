if (Trips.find().count() === 0) {
  // We need to load up some data so that we have something to work with

  Trips.insert({
    destinationCity: "Tokyo",
    tripDescription: "Planning to go skiing and to Tokyo Disney.",
    startDate: new Date(2015,01,30),
    endDate: new Date(2015,02,20),
    image: "tokyo.jpg"
  });

  Trips.insert({
    destinationCity: "Melbourne",
    tripDescription: "Visiting Suzy and Rob.",
    startDate: new Date(2015,03,29),
    endDate: new Date(2015,04,01),
    image: "melbourne.jpg"
  });
};

if (Friends.find().count() === 0 ) {
  Friends.insert({
    emailAddress: "kyliearantz@gmail.com",
    friendName: "Kylie Arantz",
    image: "k.jpg"
  });

  Friends.insert({
    emailAddress: "narantz@gmail.com",
    friendName: "Naomi Arantz",
    image: "n.jpg"
  });

  Friends.insert({
    emailAddress: "asn@gmail.com",
    friendName: "Andrew Needham",
    image: "a.jpg"
  });
}
