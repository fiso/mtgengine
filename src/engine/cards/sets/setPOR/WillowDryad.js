"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WillowDryad extends UnimplementedCard {
  constructor (game) {
    super(game, "Willow Dryad", "Portal", "POR");
  }
}

module.exports = WillowDryad;
