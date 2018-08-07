"use strict";
const Constants = require ("../../../Constants");
const YawgmothsVileOfferingBase = require("../setDOM/YawgmothsVileOffering");

class YawgmothsVileOffering extends YawgmothsVileOfferingBase {
  constructor (game) {
    super(game, "Yawgmoth's Vile Offering", "Dominaria Promos", "PDOM");
  }
}

module.exports = YawgmothsVileOffering;
