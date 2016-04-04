"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicShieldBase = require("../setDDI/AngelicShield.js");

class AngelicShield extends AngelicShieldBase {
  constructor(game) {
    super(game, "Angelic Shield", "Invasion", "INV");
  }
}

module.exports = AngelicShield;
