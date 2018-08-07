"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeepsakeGorgon extends UnimplementedCard {
  constructor (game) {
    super(game, "Keepsake Gorgon", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = KeepsakeGorgon;
