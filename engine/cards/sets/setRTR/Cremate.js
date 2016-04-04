"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CremateBase = require("../setGPT/Cremate.js");

class Cremate extends CremateBase {
  constructor(game) {
    super(game, "Cremate", "Return to Ravnica", "RTR");
  }
}

module.exports = Cremate;
