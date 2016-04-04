"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CamouflageBase = require("../setCED/Camouflage.js");

class Camouflage extends CamouflageBase {
  constructor(game) {
    super(game, "Camouflage", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Camouflage;
