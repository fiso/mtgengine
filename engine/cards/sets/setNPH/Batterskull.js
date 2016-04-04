"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BatterskullBase = require("../setpGPX/Batterskull.js");

class Batterskull extends BatterskullBase {
  constructor(game) {
    super(game, "Batterskull", "New Phyrexia", "NPH");
  }
}

module.exports = Batterskull;
