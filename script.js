const apiUrl = "https://api.openai.com/v1/chat/completions"
        const apiKey = "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" 
        async function postData(){
            const message = document.getElementById('message').value
            console.log(message);

            if (apiKey === "") {
                console.log("You forgot to add your own key !");
            }

            fetch(apiUrl, {
                method: "POST",
                // mode: "no-cors",
                headers: {
                //    "Access-Control-Allow-Origin": "*", //BAD IDEA
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`

                },
                body: JSON.stringify(
                    {
                        "model": "gpt-3.5-turbo",
                        "messages": [
                            {
                                "role": "user",
                                "content": `Write a javascript code for this question: ${message}`
                            }
                        ]
                    }
                )
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("DONE");
                const responseText = data.choices[0].message.content.trim()
                const card = document.createElement('pre')
                card.innerHTML = responseText
                document.getElementById('chat-area').appendChild(card)
            })
        }
