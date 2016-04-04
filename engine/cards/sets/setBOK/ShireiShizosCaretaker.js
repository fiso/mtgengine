"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShireiShizosCaretaker extends Card {
  constructor(game) {
    super(game, "Shirei, Shizo's Caretaker", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ShireiShizosCaretaker;
