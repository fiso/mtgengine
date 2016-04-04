"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnnihilateBase = require("../setC13/Annihilate.js");

class Annihilate extends AnnihilateBase {
  constructor(game) {
    super(game, "Annihilate", "Invasion", "INV");
  }
}

module.exports = Annihilate;
