"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpottedGriffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Spotted Griffin", "Masters Edition IV", "ME4");
  }
}

module.exports = SpottedGriffin;
