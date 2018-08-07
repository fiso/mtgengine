"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindsAglow extends UnimplementedCard {
  constructor (game) {
    super(game, "Minds Aglow", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MindsAglow;
