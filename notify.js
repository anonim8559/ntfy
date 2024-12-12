const ntfyUrl = "https://ntfy.sh/N0WY-T3M4T"; // nazwa tematu

// funkcja do wysylania
export async function sendNotification() {
  try {
    // tresc powiadomienia
    const notificationData = {
      title: "HALO!",
      message: "TEST!",
    };

    // wysylanie powiadomienia
    const response = await fetch(ntfyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: notificationData.message,
    });

    if (response.ok) {
      alert("Wysłano powiadomienie!");
    } else {
      alert("Nie wysłano powiadomienia!");
    }
  } catch (error) {
    console.error("Błąd wysyłania powiadomienia:", error);
    alert("Wystąpił błąd podczas wysyłania powiadomienia.");
  }
}
