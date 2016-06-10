"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Darkpact extends UnimplementedCard {
  constructor (game) {
    super(game, "Darkpact", "Collector's Edition", "CED");
  }
}

module.exports = Darkpact;
