"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicEruption extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Eruption", "Collector's Edition", "CED");
  }
}

module.exports = VolcanicEruption;
