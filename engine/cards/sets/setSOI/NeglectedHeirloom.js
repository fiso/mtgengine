"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeglectedHeirloom extends UnimplementedCard {
  constructor(game) {
    super(game, "Neglected Heirloom", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NeglectedHeirloom;
