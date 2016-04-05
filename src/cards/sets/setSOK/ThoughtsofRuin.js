"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtsofRuin extends UnimplementedCard {
  constructor(game) {
    super(game, "Thoughts of Ruin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ThoughtsofRuin;
