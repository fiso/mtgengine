"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HydromorphGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Hydromorph Guardian", "Torment", "TOR");
  }
}

module.exports = HydromorphGuardian;
