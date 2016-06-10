"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofthePearlTrident extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of the Pearl Trident", "Magic 2013", "M13");
  }
}

module.exports = MasterofthePearlTrident;
