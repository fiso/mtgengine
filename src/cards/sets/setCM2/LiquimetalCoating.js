"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LiquimetalCoating extends UnimplementedCard {
  constructor (game) {
    super(game, "Liquimetal Coating", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = LiquimetalCoating;
