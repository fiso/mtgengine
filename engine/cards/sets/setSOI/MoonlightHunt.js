"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonlightHunt extends UnimplementedCard {
  constructor(game) {
    super(game, "Moonlight Hunt", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MoonlightHunt;
