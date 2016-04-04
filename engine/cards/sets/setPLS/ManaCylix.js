"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaCylixBase = require("../setCON/ManaCylix.js");

class ManaCylix extends ManaCylixBase {
  constructor(game) {
    super(game, "Mana Cylix", "Planeshift", "PLS");
  }
}

module.exports = ManaCylix;
