"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WaterServantBase = require("../setM11/WaterServant.js");

class WaterServant extends WaterServantBase {
  constructor(game) {
    super(game, "Water Servant", "Magic 2014 Core Set", "M14");
  }
}

module.exports = WaterServant;
