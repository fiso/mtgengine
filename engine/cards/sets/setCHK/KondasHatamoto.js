"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KondasHatamoto extends UnimplementedCard {
  constructor(game) {
    super(game, "Konda's Hatamoto", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KondasHatamoto;
