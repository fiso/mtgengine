"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EntertheUnknown extends UnimplementedCard {
  constructor (game) {
    super(game, "Enter the Unknown", "Rivals of Ixalan", "RIX");
  }
}

module.exports = EntertheUnknown;
