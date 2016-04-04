"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CullingDais extends Card {
  constructor(game) {
    super(game, "Culling Dais", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CullingDais;
