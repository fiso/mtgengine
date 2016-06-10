"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tsunami extends UnimplementedCard {
  constructor (game) {
    super(game, "Tsunami", "Collector's Edition", "CED");
  }
}

module.exports = Tsunami;
