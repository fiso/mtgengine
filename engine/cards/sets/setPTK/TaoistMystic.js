"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaoistMystic extends UnimplementedCard {
  constructor(game) {
    super(game, "Taoist Mystic", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TaoistMystic;
