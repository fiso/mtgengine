"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlissasScorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Glissa's Scorn", "New Phyrexia", "NPH");
  }
}

module.exports = GlissasScorn;
