"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThaliasLieutenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Thalia's Lieutenant", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ThaliasLieutenant;
