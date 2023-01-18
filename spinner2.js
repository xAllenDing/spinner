let delay = 100;
let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ','\r-   ', '\r\\   ', '\r|   '];
spinner.forEach(element => {
  setTimeout(() => {
    process.stdout.write(element);
  }, delay += 200);
}); 

