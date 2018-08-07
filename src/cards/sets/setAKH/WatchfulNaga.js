"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WatchfulNaga extends UnimplementedCard {
  constructor (game) {
    super(game, "Watchful Naga", "Amonkhet", "AKH");
  }
}

module.exports = WatchfulNaga;
