"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalCaretaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Infernal Caretaker", "Legions", "LGN");
  }
}

module.exports = InfernalCaretaker;
