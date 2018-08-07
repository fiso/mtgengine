"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferiHeroofDominariaEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi, Hero of Dominaria Emblem", "Dominaria Tokens", "TDOM");
  }
}

module.exports = TeferiHeroofDominariaEmblem;
