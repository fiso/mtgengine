"use strict";
const Constants = require ("../../../Constants");
const WaterServantBase = require("../setM11/WaterServant");

class WaterServant extends WaterServantBase {
  constructor(game) {
    super(game, "Water Servant", "Magic 2014 Core Set", "M14");
  }
}

module.exports = WaterServant;
