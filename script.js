const count = 0
alert(count);
 document.getElementById("btn").addEventListener("click", function() {
            count++;
            document.getElementById("counter").textContent = count;
        });