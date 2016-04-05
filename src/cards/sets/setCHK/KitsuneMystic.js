"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KitsuneMystic extends UnimplementedCard {
  constructor(game) {
    super(game, "Kitsune Mystic", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KitsuneMystic;
