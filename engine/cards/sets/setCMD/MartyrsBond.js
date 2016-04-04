"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrsBond extends UnimplementedCard {
  constructor(game) {
    super(game, "Martyr's Bond", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MartyrsBond;
