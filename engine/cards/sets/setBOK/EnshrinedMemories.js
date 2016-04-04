"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnshrinedMemories extends Card {
  constructor(game) {
    super(game, "Enshrined Memories", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = EnshrinedMemories;
