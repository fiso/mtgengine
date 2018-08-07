"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShriekingGrotesque extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrieking Grotesque", "Guildpact", "GPT");
  }
}

module.exports = ShriekingGrotesque;
