"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParadiseMantle extends UnimplementedCard {
  constructor(game) {
    super(game, "Paradise Mantle", "Fifth Dawn", "5DN");
  }
}

module.exports = ParadiseMantle;
