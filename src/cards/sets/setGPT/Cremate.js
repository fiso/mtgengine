"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cremate extends UnimplementedCard {
  constructor (game) {
    super(game, "Cremate", "Guildpact", "GPT");
  }
}

module.exports = Cremate;
