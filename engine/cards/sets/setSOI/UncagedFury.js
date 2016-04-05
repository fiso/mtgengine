"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncagedFury extends UnimplementedCard {
  constructor(game) {
    super(game, "Uncaged Fury", "Shadows over Innistrad", "SOI");
  }
}

module.exports = UncagedFury;
