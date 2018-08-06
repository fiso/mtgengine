"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProwlingPangolin extends UnimplementedCard {
  constructor (game) {
    super(game, "Prowling Pangolin", "Eternal Masters", "EMA");
  }
}

module.exports = ProwlingPangolin;
