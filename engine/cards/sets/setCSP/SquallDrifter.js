"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquallDrifter extends UnimplementedCard {
  constructor(game) {
    super(game, "Squall Drifter", "Coldsnap", "CSP");
  }
}

module.exports = SquallDrifter;
