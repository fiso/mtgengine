"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VitalizingCascade extends Card {
  constructor(game) {
    super(game, "Vitalizing Cascade", "Mirage", "MIR");
  }
}

module.exports = VitalizingCascade;
