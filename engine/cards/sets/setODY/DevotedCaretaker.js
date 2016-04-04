"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevotedCaretaker extends Card {
  constructor(game) {
    super(game, "Devoted Caretaker", "Odyssey", "ODY");
  }
}

module.exports = DevotedCaretaker;
