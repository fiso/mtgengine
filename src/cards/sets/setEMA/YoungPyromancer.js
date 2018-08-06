"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YoungPyromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Young Pyromancer", "Eternal Masters", "EMA");
  }
}

module.exports = YoungPyromancer;
