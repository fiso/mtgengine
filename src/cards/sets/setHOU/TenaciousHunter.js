"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TenaciousHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Tenacious Hunter", "Hour of Devastation", "HOU");
  }
}

module.exports = TenaciousHunter;
