"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfernalCaretaker extends Card {
  constructor(game) {
    super(game, "Infernal Caretaker", "Legions", "LGN");
  }
}

module.exports = InfernalCaretaker;
