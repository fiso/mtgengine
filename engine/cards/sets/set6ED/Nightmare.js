"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nightmare extends UnimplementedCard {
  constructor(game) {
    super(game, "Nightmare", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Nightmare;
