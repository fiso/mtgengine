"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CowedbyWisdom extends UnimplementedCard {
  constructor (game) {
    super(game, "Cowed by Wisdom", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CowedbyWisdom;
