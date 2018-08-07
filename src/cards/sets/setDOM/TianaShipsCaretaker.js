"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TianaShipsCaretaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Tiana, Ship's Caretaker", "Dominaria", "DOM");
  }
}

module.exports = TianaShipsCaretaker;
