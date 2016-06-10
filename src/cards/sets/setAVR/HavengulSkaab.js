"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavengulSkaab extends UnimplementedCard {
  constructor (game) {
    super(game, "Havengul Skaab", "Avacyn Restored", "AVR");
  }
}

module.exports = HavengulSkaab;
