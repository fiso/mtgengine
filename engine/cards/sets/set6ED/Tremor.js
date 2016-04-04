"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tremor extends UnimplementedCard {
  constructor(game) {
    super(game, "Tremor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Tremor;
