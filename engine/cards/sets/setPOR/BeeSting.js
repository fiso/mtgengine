"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeeStingBase = require("../setME4/BeeSting.js");

class BeeSting extends BeeStingBase {
  constructor(game) {
    super(game, "Bee Sting", "Portal", "POR");
  }
}

module.exports = BeeSting;
