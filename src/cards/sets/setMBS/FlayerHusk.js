"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlayerHusk extends UnimplementedCard {
  constructor (game) {
    super(game, "Flayer Husk", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FlayerHusk;
