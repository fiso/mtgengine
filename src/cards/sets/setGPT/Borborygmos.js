"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Borborygmos extends UnimplementedCard {
  constructor (game) {
    super(game, "Borborygmos", "Guildpact", "GPT");
  }
}

module.exports = Borborygmos;
