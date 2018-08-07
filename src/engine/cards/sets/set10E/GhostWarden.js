"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghost Warden", "Tenth Edition", "10E");
  }
}

module.exports = GhostWarden;
