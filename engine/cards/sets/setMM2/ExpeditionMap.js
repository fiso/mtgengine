"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExpeditionMap extends Card {
  constructor(game) {
    super(game, "Expedition Map", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ExpeditionMap;
