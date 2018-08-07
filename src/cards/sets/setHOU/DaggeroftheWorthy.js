"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaggeroftheWorthy extends UnimplementedCard {
  constructor (game) {
    super(game, "Dagger of the Worthy", "Hour of Devastation", "HOU");
  }
}

module.exports = DaggeroftheWorthy;
