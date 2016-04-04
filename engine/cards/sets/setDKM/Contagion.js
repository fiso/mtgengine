"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ContagionBase = require("../setALL/Contagion.js");

class Contagion extends ContagionBase {
  constructor(game) {
    super(game, "Contagion", "Deckmasters", "DKM");
  }
}

module.exports = Contagion;
