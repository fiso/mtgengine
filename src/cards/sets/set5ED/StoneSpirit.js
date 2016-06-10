"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = StoneSpirit;
