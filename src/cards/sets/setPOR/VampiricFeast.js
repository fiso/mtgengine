"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampiricFeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampiric Feast", "Portal", "POR");
  }
}

module.exports = VampiricFeast;
