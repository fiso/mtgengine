"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NestInvader extends UnimplementedCard {
  constructor (game) {
    super(game, "Nest Invader", "Planechase Anthology", "PCA");
  }
}

module.exports = NestInvader;
