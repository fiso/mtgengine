"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Magnivore extends UnimplementedCard {
  constructor(game) {
    super(game, "Magnivore", "Ninth Edition", "9ED");
  }
}

module.exports = Magnivore;
