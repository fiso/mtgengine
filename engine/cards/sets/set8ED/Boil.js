"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoilBase = require("../set6ED/Boil.js");

class Boil extends BoilBase {
  constructor(game) {
    super(game, "Boil", "Eighth Edition", "8ED");
  }
}

module.exports = Boil;
