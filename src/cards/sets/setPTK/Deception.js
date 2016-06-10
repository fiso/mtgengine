"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deception extends UnimplementedCard {
  constructor (game) {
    super(game, "Deception", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = Deception;
