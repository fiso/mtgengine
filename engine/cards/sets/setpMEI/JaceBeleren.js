"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JaceBelerenBase = require("../setDD3_JVC/JaceBeleren.js");

class JaceBeleren extends JaceBelerenBase {
  constructor(game) {
    super(game, "Jace Beleren", "Media Inserts", "pMEI");
  }
}

module.exports = JaceBeleren;
