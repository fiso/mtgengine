"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineCongregation extends UnimplementedCard {
  constructor (game) {
    super(game, "Divine Congregation", "Time Spiral", "TSP");
  }
}

module.exports = DivineCongregation;
