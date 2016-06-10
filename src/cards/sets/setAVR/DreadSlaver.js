"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadSlaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Slaver", "Avacyn Restored", "AVR");
  }
}

module.exports = DreadSlaver;
