"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnnihilateBase = require("../setC13/Annihilate.js");

class Annihilate extends AnnihilateBase {
  constructor(game) {
    super(game, "Annihilate", "Commander 2014", "C14");
  }
}

module.exports = Annihilate;
