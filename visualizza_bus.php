<?php
// Connessione al database
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'noleggio_bus';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM bus";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<div class='bus-card'>";
        echo "<img src='" . $row['immagine'] . "' alt='Bus Image'>";
        echo "<h2>" . $row['nome'] . "</h2>";
        echo "<p>Capienza: " . $row['capienza'] . " persone</p>";
        echo "<p>€" . $row['prezzo'] . " al giorno</p>";
        echo "</div>";
    }
} else {
    echo "Nessun bus trovato.";
}

$conn->close();
?>
