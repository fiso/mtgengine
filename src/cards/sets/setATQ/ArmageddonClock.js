"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmageddonClock extends UnimplementedCard {
  constructor (game) {
    super(game, "Armageddon Clock", "Antiquities", "ATQ");
  }
}

module.exports = ArmageddonClock;
