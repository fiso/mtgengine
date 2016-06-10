"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenedictionofMoons extends UnimplementedCard {
  constructor (game) {
    super(game, "Benediction of Moons", "Guildpact", "GPT");
  }
}

module.exports = BenedictionofMoons;
