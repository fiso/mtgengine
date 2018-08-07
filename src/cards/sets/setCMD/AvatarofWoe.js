"use strict";
const Constants = require ("../../../Constants");
const AvatarofWoeBase = require("../setCM2/AvatarofWoe");

class AvatarofWoe extends AvatarofWoeBase {
  constructor (game) {
    super(game, "Avatar of Woe", "Commander 2011", "CMD");
  }
}

module.exports = AvatarofWoe;
