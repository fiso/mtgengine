"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildCrocodile extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Crocodile", "Unstable", "UST");
  }
}

module.exports = WildCrocodile;
