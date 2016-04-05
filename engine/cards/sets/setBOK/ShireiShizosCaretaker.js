"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShireiShizosCaretaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Shirei, Shizo's Caretaker", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ShireiShizosCaretaker;
