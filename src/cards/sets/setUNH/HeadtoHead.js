"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeadtoHead extends UnimplementedCard {
  constructor (game) {
    super(game, "Head to Head", "Unhinged", "UNH");
  }
}

module.exports = HeadtoHead;
