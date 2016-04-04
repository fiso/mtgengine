"use strict";
const Constants = require ("../../../Constants");
const AirServantBase = require("../setM11/AirServant");

class AirServant extends AirServantBase {
  constructor(game) {
    super(game, "Air Servant", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AirServant;
