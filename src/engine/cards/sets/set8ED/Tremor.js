"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tremor extends UnimplementedCard {
  constructor (game) {
    super(game, "Tremor", "Eighth Edition", "8ED");
  }
}

module.exports = Tremor;
