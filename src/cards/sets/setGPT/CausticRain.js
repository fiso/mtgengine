"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CausticRain extends UnimplementedCard {
  constructor (game) {
    super(game, "Caustic Rain", "Guildpact", "GPT");
  }
}

module.exports = CausticRain;
