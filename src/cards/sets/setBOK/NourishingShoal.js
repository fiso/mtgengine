"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NourishingShoal extends UnimplementedCard {
  constructor(game) {
    super(game, "Nourishing Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = NourishingShoal;
