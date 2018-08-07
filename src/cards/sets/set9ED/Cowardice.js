"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cowardice extends UnimplementedCard {
  constructor (game) {
    super(game, "Cowardice", "Ninth Edition", "9ED");
  }
}

module.exports = Cowardice;
