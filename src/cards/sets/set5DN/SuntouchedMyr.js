"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuntouchedMyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Suntouched Myr", "Fifth Dawn", "5DN");
  }
}

module.exports = SuntouchedMyr;
