"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindSculpt extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Sculpt", "Magic 2015", "M15");
  }
}

module.exports = MindSculpt;
