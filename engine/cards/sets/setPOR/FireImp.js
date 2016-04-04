"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireImpBase = require("../setME4/FireImp.js");

class FireImp extends FireImpBase {
  constructor(game) {
    super(game, "Fire Imp", "Portal", "POR");
  }
}

module.exports = FireImp;
