"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenSquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Squire", "Magic 2013", "M13");
  }
}

module.exports = AvenSquire;
