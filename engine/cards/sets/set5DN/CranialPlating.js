"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CranialPlating extends UnimplementedCard {
  constructor(game) {
    super(game, "Cranial Plating", "Fifth Dawn", "5DN");
  }
}

module.exports = CranialPlating;
