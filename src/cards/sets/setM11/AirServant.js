"use strict";
const Constants = require ("../../../Constants");
const AirServantBase = require("../setW16/AirServant");

class AirServant extends AirServantBase {
  constructor (game) {
    super(game, "Air Servant", "Magic 2011", "M11");
  }
}

module.exports = AirServant;
