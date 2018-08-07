"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvestGwyllion extends UnimplementedCard {
  constructor (game) {
    super(game, "Harvest Gwyllion", "Eventide", "EVE");
  }
}

module.exports = HarvestGwyllion;
