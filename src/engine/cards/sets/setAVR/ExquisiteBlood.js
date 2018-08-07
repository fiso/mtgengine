"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExquisiteBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Exquisite Blood", "Avacyn Restored", "AVR");
  }
}

module.exports = ExquisiteBlood;
