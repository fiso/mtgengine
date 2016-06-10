"use strict";
const Constants = require ("../../../Constants");
const WeiInfantryBase = require("../setME3/WeiInfantry");

class WeiInfantry extends WeiInfantryBase {
  constructor (game) {
    super(game, "Wei Infantry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WeiInfantry;
