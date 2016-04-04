"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProwlingPangolin extends UnimplementedCard {
  constructor(game) {
    super(game, "Prowling Pangolin", "Onslaught", "ONS");
  }
}

module.exports = ProwlingPangolin;
