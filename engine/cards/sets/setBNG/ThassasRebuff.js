"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThassasRebuff extends UnimplementedCard {
  constructor(game) {
    super(game, "Thassa's Rebuff", "Born of the Gods", "BNG");
  }
}

module.exports = ThassasRebuff;
