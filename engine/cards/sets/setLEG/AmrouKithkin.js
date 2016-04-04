"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AmrouKithkinBase = require("../set4ED/AmrouKithkin.js");

class AmrouKithkin extends AmrouKithkinBase {
  constructor(game) {
    super(game, "Amrou Kithkin", "Legends", "LEG");
  }
}

module.exports = AmrouKithkin;
