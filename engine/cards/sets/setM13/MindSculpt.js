"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindSculpt extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Sculpt", "Magic 2013", "M13");
  }
}

module.exports = MindSculpt;
