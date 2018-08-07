"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Biorhythm extends UnimplementedCard {
  constructor (game) {
    super(game, "Biorhythm", "Ninth Edition", "9ED");
  }
}

module.exports = Biorhythm;
