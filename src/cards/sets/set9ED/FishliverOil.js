"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FishliverOil extends UnimplementedCard {
  constructor (game) {
    super(game, "Fishliver Oil", "Ninth Edition", "9ED");
  }
}

module.exports = FishliverOil;
