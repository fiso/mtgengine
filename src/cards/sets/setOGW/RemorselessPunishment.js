"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RemorselessPunishment extends UnimplementedCard {
  constructor(game) {
    super(game, "Remorseless Punishment", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RemorselessPunishment;
