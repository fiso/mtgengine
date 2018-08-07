"use strict";
const Constants = require ("../../../Constants");
const CarvenCaryatidBase = require("../setIMA/CarvenCaryatid");

class CarvenCaryatid extends CarvenCaryatidBase {
  constructor (game) {
    super(game, "Carven Caryatid", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CarvenCaryatid;
