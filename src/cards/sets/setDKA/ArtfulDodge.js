"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtfulDodge extends UnimplementedCard {
  constructor (game) {
    super(game, "Artful Dodge", "Dark Ascension", "DKA");
  }
}

module.exports = ArtfulDodge;
