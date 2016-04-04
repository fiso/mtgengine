"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrazzledEditor extends Card {
  constructor(game) {
    super(game, "Frazzled Editor", "Unhinged", "UNH");
  }
}

module.exports = FrazzledEditor;
