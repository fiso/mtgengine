"use strict";
const Constants = require ("../../../Constants");
const AirServantBase = require("../setW16/AirServant");

class AirServant extends AirServantBase {
  constructor (game) {
    super(game, "Air Servant", "Modern Masters 2015", "MM2");
  }
}

module.exports = AirServant;
