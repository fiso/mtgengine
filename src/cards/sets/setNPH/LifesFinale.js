"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifesFinale extends UnimplementedCard {
  constructor(game) {
    super(game, "Life's Finale", "New Phyrexia", "NPH");
  }
}

module.exports = LifesFinale;
