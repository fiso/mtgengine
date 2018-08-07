"use strict";
const Constants = require ("../../../Constants");
const WaterServantBase = require("../setMM2/WaterServant");

class WaterServant extends WaterServantBase {
  constructor (game) {
    super(game, "Water Servant", "Magic 2011", "M11");
  }
}

module.exports = WaterServant;
