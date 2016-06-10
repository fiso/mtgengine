"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellsCaretaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Hell's Caretaker", "Chronicles", "CHR");
  }
}

module.exports = HellsCaretaker;
