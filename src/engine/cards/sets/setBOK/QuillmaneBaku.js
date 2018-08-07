"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuillmaneBaku extends UnimplementedCard {
  constructor (game) {
    super(game, "Quillmane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = QuillmaneBaku;
