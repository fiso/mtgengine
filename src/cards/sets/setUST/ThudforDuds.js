"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThudforDuds extends UnimplementedCard {
  constructor (game) {
    super(game, "Thud-for-Duds", "Unstable", "UST");
  }
}

module.exports = ThudforDuds;
