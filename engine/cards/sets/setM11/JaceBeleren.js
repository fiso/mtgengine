"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JaceBelerenBase = require("../setDD3_JVC/JaceBeleren.js");

class JaceBeleren extends JaceBelerenBase {
  constructor(game) {
    super(game, "Jace Beleren", "Magic 2011", "M11");
  }
}

module.exports = JaceBeleren;
