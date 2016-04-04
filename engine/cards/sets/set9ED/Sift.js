"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sift extends UnimplementedCard {
  constructor(game) {
    super(game, "Sift", "Ninth Edition", "9ED");
  }
}

module.exports = Sift;
