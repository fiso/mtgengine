"use strict";
const Constants = require ("../../../Constants");
const GhirapurGearcrafterBase = require("../setDDU/GhirapurGearcrafter");

class GhirapurGearcrafter extends GhirapurGearcrafterBase {
  constructor (game) {
    super(game, "Ghirapur Gearcrafter", "Magic Origins", "ORI");
  }
}

module.exports = GhirapurGearcrafter;
