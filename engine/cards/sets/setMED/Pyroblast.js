"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyroblastBase = require("../set5ED/Pyroblast.js");

class Pyroblast extends PyroblastBase {
  constructor(game) {
    super(game, "Pyroblast", "Masters Edition", "MED");
  }
}

module.exports = Pyroblast;
