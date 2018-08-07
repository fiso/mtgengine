"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VraskasScorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Vraska's Scorn", "Rivals of Ixalan", "RIX");
  }
}

module.exports = VraskasScorn;
