"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SqueesEmbrace extends UnimplementedCard {
  constructor(game) {
    super(game, "Squee's Embrace", "Apocalypse", "APC");
  }
}

module.exports = SqueesEmbrace;
