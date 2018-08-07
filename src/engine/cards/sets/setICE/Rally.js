"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rally extends UnimplementedCard {
  constructor (game) {
    super(game, "Rally", "Ice Age", "ICE");
  }
}

module.exports = Rally;
