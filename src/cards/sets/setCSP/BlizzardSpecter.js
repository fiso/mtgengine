"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlizzardSpecter extends UnimplementedCard {
  constructor (game) {
    super(game, "Blizzard Specter", "Coldsnap", "CSP");
  }
}

module.exports = BlizzardSpecter;
