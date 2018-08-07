"use strict";
const Constants = require ("../../../Constants");
const FiremaneAngelBase = require("../setIMA/FiremaneAngel");

class FiremaneAngel extends FiremaneAngelBase {
  constructor (game) {
    super(game, "Firemane Angel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FiremaneAngel;
