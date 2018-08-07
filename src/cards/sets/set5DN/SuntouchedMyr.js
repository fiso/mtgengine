"use strict";
const Constants = require ("../../../Constants");
const SuntouchedMyrBase = require("../setHOP/SuntouchedMyr");

class SuntouchedMyr extends SuntouchedMyrBase {
  constructor (game) {
    super(game, "Suntouched Myr", "Fifth Dawn", "5DN");
  }
}

module.exports = SuntouchedMyr;
