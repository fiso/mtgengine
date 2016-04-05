"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeraphSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Seraph Sanctuary", "Avacyn Restored", "AVR");
  }
}

module.exports = SeraphSanctuary;
