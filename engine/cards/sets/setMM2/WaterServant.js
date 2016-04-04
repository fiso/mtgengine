"use strict";
const Constants = require ("../../../Constants");
const WaterServantBase = require("../setM11/WaterServant");

class WaterServant extends WaterServantBase {
  constructor(game) {
    super(game, "Water Servant", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WaterServant;
