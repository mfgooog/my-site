<?php
// Получаем данные из формы
$name = isset($_POST['name']) ? strip_tags($_POST['name']) : '';
$email = isset($_POST['email']) ? strip_tags($_POST['email']) : '';
$message = isset($_POST['message']) ? strip_tags($_POST['message']) : '';

// Форматируем данные
$fileContent = sprintf(
    "Имя: %s\nEmail: %s\nСообщение:\n%s",
    $name,
    $email,
    $message
);

// Генератор уникального имени файла
$timestamp = time();
$filename = "обратная_связь_{$timestamp}.txt";

// Сохраняем файл в ту же папку, где находится save.php
file_put_contents($filename, $fileContent);

// Ответ пользователю
echo '<h2>Ваше сообщение успешно отправлено и сохранено!</h2>';
?>