const count = 0

 document.getElementById("btn").addEventListener("click", function() {
            alert(count);
	        count++;
            document.getElementById("counter").textContent = count;
        });