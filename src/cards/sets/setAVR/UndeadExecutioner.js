"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndeadExecutioner extends UnimplementedCard {
  constructor (game) {
    super(game, "Undead Executioner", "Avacyn Restored", "AVR");
  }
}

module.exports = UndeadExecutioner;
