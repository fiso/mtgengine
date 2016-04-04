"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnteringBase = require("../setDGM/Entering.js");

class Entering extends EnteringBase {
  constructor(game) {
    super(game, "Entering", "Launch Parties", "pLPA");
  }
}

module.exports = Entering;
