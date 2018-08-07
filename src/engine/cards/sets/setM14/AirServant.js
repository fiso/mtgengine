"use strict";
const Constants = require ("../../../Constants");
const AirServantBase = require("../setW16/AirServant");

class AirServant extends AirServantBase {
  constructor (game) {
    super(game, "Air Servant", "Magic 2014", "M14");
  }
}

module.exports = AirServant;
