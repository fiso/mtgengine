"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuillmaneBaku extends Card {
  constructor(game) {
    super(game, "Quillmane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = QuillmaneBaku;
