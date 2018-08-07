"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BumblingPangolin extends UnimplementedCard {
  constructor (game) {
    super(game, "Bumbling Pangolin", "Unstable", "UST");
  }
}

module.exports = BumblingPangolin;
