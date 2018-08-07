"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BehindtheScenes extends UnimplementedCard {
  constructor (game) {
    super(game, "Behind the Scenes", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BehindtheScenes;
