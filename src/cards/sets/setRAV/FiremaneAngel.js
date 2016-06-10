"use strict";
const Constants = require ("../../../Constants");
const FiremaneAngelBase = require("../setDDH/FiremaneAngel");

class FiremaneAngel extends FiremaneAngelBase {
  constructor (game) {
    super(game, "Firemane Angel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FiremaneAngel;
