"use strict";
const Constants = require ("../../../Constants");
const StampedingWildebeestsBase = require("../setGVL/StampedingWildebeests");

class StampedingWildebeests extends StampedingWildebeestsBase {
  constructor (game) {
    super(game, "Stampeding Wildebeests", "Tenth Edition", "10E");
  }
}

module.exports = StampedingWildebeests;
