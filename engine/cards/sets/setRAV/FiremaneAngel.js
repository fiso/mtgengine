"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FiremaneAngelBase = require("../setDDH/FiremaneAngel.js");

class FiremaneAngel extends FiremaneAngelBase {
  constructor(game) {
    super(game, "Firemane Angel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FiremaneAngel;
