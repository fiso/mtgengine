"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BestialFury extends UnimplementedCard {
  constructor(game) {
    super(game, "Bestial Fury", "Alliances", "ALL");
  }
}

module.exports = BestialFury;
