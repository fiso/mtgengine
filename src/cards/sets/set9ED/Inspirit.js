"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inspirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Inspirit", "Ninth Edition", "9ED");
  }
}

module.exports = Inspirit;
