"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VengefulRebel extends UnimplementedCard {
  constructor (game) {
    super(game, "Vengeful Rebel", "Aether Revolt", "AER");
  }
}

module.exports = VengefulRebel;
