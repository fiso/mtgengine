"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RetreattoEmeria extends UnimplementedCard {
  constructor(game) {
    super(game, "Retreat to Emeria", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RetreattoEmeria;
