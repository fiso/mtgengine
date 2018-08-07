"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadStatuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Statuary", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = DreadStatuary;
