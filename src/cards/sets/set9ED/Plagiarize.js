"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plagiarize extends UnimplementedCard {
  constructor (game) {
    super(game, "Plagiarize", "Ninth Edition", "9ED");
  }
}

module.exports = Plagiarize;
