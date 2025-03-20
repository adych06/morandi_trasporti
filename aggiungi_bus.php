<?php
// Connessione al database
$host = 'localhost'; // o l'indirizzo del tuo server
$username = 'root'; // il tuo nome utente
$password = ''; // la tua password
$database = 'noleggio_bus';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupero i dati inviati dal form
    $nome = $_POST['nome'];
    $capienza = $_POST['capienza'];
    $prezzo = $_POST['prezzo'];
    $immagine = $_POST['immagine'];

    // Prepara la query di inserimento
    $sql = "INSERT INTO bus (nome, capienza, prezzo, immagine) VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sids", $nome, $capienza, $prezzo, $immagine);

    if ($stmt->execute()) {
        echo "Nuovo bus aggiunto con successo!";
    } else {
        echo "Errore: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aggiungi Bus</title>
</head>
<body>
    <h1>Aggiungi un nuovo Bus</h1>
    <form action="aggiungi_bus.php" method="POST">
        <label for="nome">Nome del Bus:</label><br>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="capienza">Capienza:</label><br>
        <input type="number" id="capienza" name="capienza" required><br><br>

        <label for="prezzo">Prezzo al giorno (€):</label><br>
        <input type="number" id="prezzo" name="prezzo" step="0.01" required><br><br>

        <label for="immagine">URL dell'immagine:</label><br>
        <input type="text" id="immagine" name="immagine" required><br><br>

        <button type="submit">Aggiungi Bus</button>
    </form>
</body>
</html>
