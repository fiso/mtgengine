"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ulcerate extends UnimplementedCard {
  constructor(game) {
    super(game, "Ulcerate", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Ulcerate;
