"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkDabbling extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Dabbling", "Magic Origins", "ORI");
  }
}

module.exports = DarkDabbling;
