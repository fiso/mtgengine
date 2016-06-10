"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExpeditionMap extends UnimplementedCard {
  constructor (game) {
    super(game, "Expedition Map", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ExpeditionMap;
