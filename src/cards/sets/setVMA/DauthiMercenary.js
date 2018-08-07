"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauthiMercenary extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauthi Mercenary", "Vintage Masters", "VMA");
  }
}

module.exports = DauthiMercenary;
