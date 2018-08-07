"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wakedancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Wakedancer", "Eternal Masters", "EMA");
  }
}

module.exports = Wakedancer;
