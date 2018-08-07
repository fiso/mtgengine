"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WolfhuntersQuiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Wolfhunter's Quiver", "Dark Ascension", "DKA");
  }
}

module.exports = WolfhuntersQuiver;
