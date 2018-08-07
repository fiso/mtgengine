"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DancingScimitar extends UnimplementedCard {
  constructor (game) {
    super(game, "Dancing Scimitar", "Ninth Edition", "9ED");
  }
}

module.exports = DancingScimitar;
