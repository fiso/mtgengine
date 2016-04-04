"use strict";
const Constants = require ("../../../Constants");
const AvatarofWoeBase = require("../setARC/AvatarofWoe");

class AvatarofWoe extends AvatarofWoeBase {
  constructor(game) {
    super(game, "Avatar of Woe", "Prophecy", "PCY");
  }
}

module.exports = AvatarofWoe;
