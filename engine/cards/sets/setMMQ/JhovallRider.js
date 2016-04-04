"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JhovallRider extends UnimplementedCard {
  constructor(game) {
    super(game, "Jhovall Rider", "Mercadian Masques", "MMQ");
  }
}

module.exports = JhovallRider;
