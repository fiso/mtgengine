"use strict";
const Constants = require ("../../../Constants");
const CamouflageBase = require("../setCEI/Camouflage");

class Camouflage extends CamouflageBase {
  constructor (game) {
    super(game, "Camouflage", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Camouflage;
