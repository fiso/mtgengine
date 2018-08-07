"use strict";
const Card = require("../../../objects/Card");

class KrakenHatchling extends Card {
  constructor (game) {
    super(game, "Kraken Hatchling", "Battlebond", "BBD");
    this.cost = "{U}";
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 0, 4);
  }
}

module.exports = KrakenHatchling;
