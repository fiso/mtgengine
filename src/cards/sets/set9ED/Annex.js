"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Annex extends UnimplementedCard {
  constructor (game) {
    super(game, "Annex", "Ninth Edition", "9ED");
  }
}

module.exports = Annex;
