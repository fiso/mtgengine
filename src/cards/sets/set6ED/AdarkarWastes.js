"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdarkarWastes extends UnimplementedCard {
  constructor (game) {
    super(game, "Adarkar Wastes", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AdarkarWastes;
