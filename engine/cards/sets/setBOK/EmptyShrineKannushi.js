"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmptyShrineKannushi extends Card {
  constructor(game) {
    super(game, "Empty-Shrine Kannushi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = EmptyShrineKannushi;
