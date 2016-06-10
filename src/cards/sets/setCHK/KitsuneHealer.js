"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KitsuneHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Kitsune Healer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KitsuneHealer;
