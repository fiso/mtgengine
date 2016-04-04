"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackCat extends UnimplementedCard {
  constructor(game) {
    super(game, "Black Cat", "Dark Ascension", "DKA");
  }
}

module.exports = BlackCat;
