"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BadMoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Bad Moon", "Collector's Edition", "CED");
  }
}

module.exports = BadMoon;
