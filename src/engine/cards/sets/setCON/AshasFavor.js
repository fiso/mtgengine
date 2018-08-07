"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshasFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "Asha's Favor", "Conflux", "CON");
  }
}

module.exports = AshasFavor;
