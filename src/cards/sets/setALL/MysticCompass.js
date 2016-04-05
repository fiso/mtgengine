"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticCompass extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystic Compass", "Alliances", "ALL");
  }
}

module.exports = MysticCompass;
