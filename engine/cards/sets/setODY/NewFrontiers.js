"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NewFrontiers extends UnimplementedCard {
  constructor(game) {
    super(game, "New Frontiers", "Odyssey", "ODY");
  }
}

module.exports = NewFrontiers;
