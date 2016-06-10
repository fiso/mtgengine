"use strict";
const Constants = require ("../../../Constants");
const SuntouchedMyrBase = require("../set5DN/SuntouchedMyr");

class SuntouchedMyr extends SuntouchedMyrBase {
  constructor (game) {
    super(game, "Suntouched Myr", "Planechase", "HOP");
  }
}

module.exports = SuntouchedMyr;
