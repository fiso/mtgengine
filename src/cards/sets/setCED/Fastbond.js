"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fastbond extends UnimplementedCard {
  constructor (game) {
    super(game, "Fastbond", "Collector's Edition", "CED");
  }
}

module.exports = Fastbond;
