"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindsAglow extends UnimplementedCard {
  constructor (game) {
    super(game, "Minds Aglow", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MindsAglow;
