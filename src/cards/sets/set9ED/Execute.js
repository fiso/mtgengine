"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Execute extends UnimplementedCard {
  constructor (game) {
    super(game, "Execute", "Ninth Edition", "9ED");
  }
}

module.exports = Execute;
