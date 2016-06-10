"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindsofChange extends UnimplementedCard {
  constructor (game) {
    super(game, "Winds of Change", "Fifth Edition", "5ED");
  }
}

module.exports = WindsofChange;
