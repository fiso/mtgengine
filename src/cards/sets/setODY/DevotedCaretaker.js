"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevotedCaretaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Devoted Caretaker", "Odyssey", "ODY");
  }
}

module.exports = DevotedCaretaker;
