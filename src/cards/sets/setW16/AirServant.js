"use strict";
const Constants = require ("../../../Constants");
const AirServantBase = require("../setM11/AirServant");

class AirServant extends AirServantBase {
  constructor (game) {
    super(game, "Air Servant", "Welcome Deck 2016", "W16");
  }
}

module.exports = AirServant;
