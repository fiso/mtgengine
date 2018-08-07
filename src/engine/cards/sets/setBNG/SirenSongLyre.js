"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SirenSongLyre extends UnimplementedCard {
  constructor (game) {
    super(game, "Siren Song Lyre", "Born of the Gods", "BNG");
  }
}

module.exports = SirenSongLyre;
