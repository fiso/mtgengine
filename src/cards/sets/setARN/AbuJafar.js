"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbuJafar extends UnimplementedCard {
  constructor (game) {
    super(game, "Abu Ja'far", "Arabian Nights", "ARN");
  }
}

module.exports = AbuJafar;
