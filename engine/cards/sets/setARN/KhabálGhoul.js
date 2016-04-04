"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhabálGhoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Khabál Ghoul", "Arabian Nights", "ARN");
  }
}

module.exports = KhabálGhoul;
