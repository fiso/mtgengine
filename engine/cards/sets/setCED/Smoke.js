"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smoke extends UnimplementedCard {
  constructor(game) {
    super(game, "Smoke", "Collector's Edition", "CED");
  }
}

module.exports = Smoke;
