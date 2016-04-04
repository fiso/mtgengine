"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighbornGhoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Highborn Ghoul", "Dark Ascension", "DKA");
  }
}

module.exports = HighbornGhoul;
