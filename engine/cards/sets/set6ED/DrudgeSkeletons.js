"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrudgeSkeletons extends Card {
  constructor(game) {
    super(game, "Drudge Skeletons", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DrudgeSkeletons;
