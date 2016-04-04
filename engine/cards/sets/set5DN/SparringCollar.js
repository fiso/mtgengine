"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparringCollar extends UnimplementedCard {
  constructor(game) {
    super(game, "Sparring Collar", "Fifth Dawn", "5DN");
  }
}

module.exports = SparringCollar;
