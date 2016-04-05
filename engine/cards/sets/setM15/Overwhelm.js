"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overwhelm extends UnimplementedCard {
  constructor(game) {
    super(game, "Overwhelm", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Overwhelm;
