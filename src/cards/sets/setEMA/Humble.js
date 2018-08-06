"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Humble extends UnimplementedCard {
  constructor (game) {
    super(game, "Humble", "Eternal Masters", "EMA");
  }
}

module.exports = Humble;
