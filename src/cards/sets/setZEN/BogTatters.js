"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogTatters extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Tatters", "Zendikar", "ZEN");
  }
}

module.exports = BogTatters;
