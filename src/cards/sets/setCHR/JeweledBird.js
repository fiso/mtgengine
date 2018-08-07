"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeweledBird extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeweled Bird", "Chronicles", "CHR");
  }
}

module.exports = JeweledBird;
