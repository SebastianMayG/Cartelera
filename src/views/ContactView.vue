<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
<div class="container">
  <form>

    <label for="name">Nombre</label>
    <input type="text" id="name" name="name" placeholder="Nombre">

    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="Example@example.com">

    <label for="subject">Mensaje</label>
    <textarea id="subject" name="subject" placeholder="Escribe tu mensaje" style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div>

</template>

<style>
/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #9e9e9e; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>