"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellsCaretaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Hell's Caretaker", "Masters 25", "A25");
  }
}

module.exports = HellsCaretaker;
