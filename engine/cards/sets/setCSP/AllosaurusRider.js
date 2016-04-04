"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AllosaurusRider extends Card {
  constructor(game) {
    super(game, "Allosaurus Rider", "Coldsnap", "CSP");
  }
}

module.exports = AllosaurusRider;
