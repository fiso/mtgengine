"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadecraftArtisan extends UnimplementedCard {
  constructor (game) {
    super(game, "Jadecraft Artisan", "Rivals of Ixalan", "RIX");
  }
}

module.exports = JadecraftArtisan;
