"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IvorytuskFortressBase = require("../setKTK/IvorytuskFortress.js");

class IvorytuskFortress extends IvorytuskFortressBase {
  constructor(game) {
    super(game, "Ivorytusk Fortress", "Media Inserts", "pMEI");
  }
}

module.exports = IvorytuskFortress;
