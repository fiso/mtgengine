"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Abomination extends UnimplementedCard {
  constructor (game) {
    super(game, "Abomination", "Fourth Edition", "4ED");
  }
}

module.exports = Abomination;
