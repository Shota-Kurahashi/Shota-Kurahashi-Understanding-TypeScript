let logged: string;

function sendAnalytics(data: string) {
  console.log(data);
  logged = data;
}

sendAnalytics("The data");
