"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuntouchedMyrBase = require("../set5DN/SuntouchedMyr.js");

class SuntouchedMyr extends SuntouchedMyrBase {
  constructor(game) {
    super(game, "Suntouched Myr", "Planechase", "HOP");
  }
}

module.exports = SuntouchedMyr;
