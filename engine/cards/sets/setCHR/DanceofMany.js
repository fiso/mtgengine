"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DanceofMany extends UnimplementedCard {
  constructor(game) {
    super(game, "Dance of Many", "Chronicles", "CHR");
  }
}

module.exports = DanceofMany;
