"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasGroundbreaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Mishra's Groundbreaker", "Alliances", "ALL");
  }
}

module.exports = MishrasGroundbreaker;
