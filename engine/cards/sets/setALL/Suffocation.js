"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Suffocation extends UnimplementedCard {
  constructor(game) {
    super(game, "Suffocation", "Alliances", "ALL");
  }
}

module.exports = Suffocation;
