"use strict";
const Constants = require ("../../../Constants");
const AvatarofWoeBase = require("../setARC/AvatarofWoe");

class AvatarofWoe extends AvatarofWoeBase {
  constructor (game) {
    super(game, "Avatar of Woe", "Pro Tour", "pPRO");
  }
}

module.exports = AvatarofWoe;
