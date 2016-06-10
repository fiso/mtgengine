"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshmouthBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashmouth Blade", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AshmouthBlade;
