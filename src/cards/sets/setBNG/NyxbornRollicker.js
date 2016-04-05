"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NyxbornRollicker extends UnimplementedCard {
  constructor(game) {
    super(game, "Nyxborn Rollicker", "Born of the Gods", "BNG");
  }
}

module.exports = NyxbornRollicker;
