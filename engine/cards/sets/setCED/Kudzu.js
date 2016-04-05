"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kudzu extends UnimplementedCard {
  constructor(game) {
    super(game, "Kudzu", "Collector's Edition", "CED");
  }
}

module.exports = Kudzu;
