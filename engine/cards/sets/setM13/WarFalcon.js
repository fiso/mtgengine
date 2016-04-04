"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarFalcon extends UnimplementedCard {
  constructor(game) {
    super(game, "War Falcon", "Magic 2013", "M13");
  }
}

module.exports = WarFalcon;
