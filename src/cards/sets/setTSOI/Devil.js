"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Devil extends UnimplementedCard {
  constructor (game) {
    super(game, "Devil", "Shadows over Innistrad Tokens", "TSOI");
  }
}

module.exports = Devil;
