"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmageddonClock extends UnimplementedCard {
  constructor (game) {
    super(game, "Armageddon Clock", "Masters Edition IV", "ME4");
  }
}

module.exports = ArmageddonClock;
