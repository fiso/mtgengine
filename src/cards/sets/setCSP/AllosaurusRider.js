"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllosaurusRider extends UnimplementedCard {
  constructor(game) {
    super(game, "Allosaurus Rider", "Coldsnap", "CSP");
  }
}

module.exports = AllosaurusRider;
