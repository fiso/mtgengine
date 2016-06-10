"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagicalHack extends UnimplementedCard {
  constructor (game) {
    super(game, "Magical Hack", "Collector's Edition", "CED");
  }
}

module.exports = MagicalHack;
