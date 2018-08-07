"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreamofLife extends UnimplementedCard {
  constructor (game) {
    super(game, "Stream of Life", "Ninth Edition", "9ED");
  }
}

module.exports = StreamofLife;
