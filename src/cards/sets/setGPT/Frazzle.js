"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Frazzle extends UnimplementedCard {
  constructor (game) {
    super(game, "Frazzle", "Guildpact", "GPT");
  }
}

module.exports = Frazzle;
