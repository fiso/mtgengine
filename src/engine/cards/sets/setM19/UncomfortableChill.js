"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncomfortableChill extends UnimplementedCard {
  constructor (game) {
    super(game, "Uncomfortable Chill", "Core Set 2019", "M19");
  }
}

module.exports = UncomfortableChill;
