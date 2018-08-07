"use strict";
const Constants = require ("../../../Constants");
const AvatarofWoeBase = require("../setCM2/AvatarofWoe");

class AvatarofWoe extends AvatarofWoeBase {
  constructor (game) {
    super(game, "Avatar of Woe", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = AvatarofWoe;
