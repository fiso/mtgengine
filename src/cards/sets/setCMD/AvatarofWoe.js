"use strict";
const Constants = require ("../../../Constants");
const AvatarofWoeBase = require("../setARC/AvatarofWoe");

class AvatarofWoe extends AvatarofWoeBase {
  constructor (game) {
    super(game, "Avatar of Woe", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AvatarofWoe;
