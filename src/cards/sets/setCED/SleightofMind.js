"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SleightofMind extends UnimplementedCard {
  constructor(game) {
    super(game, "Sleight of Mind", "Collector's Edition", "CED");
  }
}

module.exports = SleightofMind;
