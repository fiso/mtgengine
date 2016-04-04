"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceScatter extends UnimplementedCard {
  constructor(game) {
    super(game, "Essence Scatter", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = EssenceScatter;
