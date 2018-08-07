"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimbleObstructionist extends UnimplementedCard {
  constructor (game) {
    super(game, "Nimble Obstructionist", "Hour of Devastation", "HOU");
  }
}

module.exports = NimbleObstructionist;
