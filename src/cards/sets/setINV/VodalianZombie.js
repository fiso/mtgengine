"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Vodalian Zombie", "Invasion", "INV");
  }
}

module.exports = VodalianZombie;
