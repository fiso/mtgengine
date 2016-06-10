"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseMourning extends UnimplementedCard {
  constructor (game) {
    super(game, "False Mourning", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = FalseMourning;
