"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GryffsBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Gryff's Boon", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GryffsBoon;
