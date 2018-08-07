"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TezzeretArtificeMasterToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Tezzeret, Artifice Master Token", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = TezzeretArtificeMasterToken;
