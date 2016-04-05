"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KormusBell extends UnimplementedCard {
  constructor(game) {
    super(game, "Kormus Bell", "Collector's Edition", "CED");
  }
}

module.exports = KormusBell;
