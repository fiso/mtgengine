"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessedReincarnation extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessed Reincarnation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = BlessedReincarnation;
