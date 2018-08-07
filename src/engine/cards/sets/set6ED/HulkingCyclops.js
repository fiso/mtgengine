"use strict";
const Constants = require ("../../../Constants");
const HulkingCyclopsBase = require("../set8ED/HulkingCyclops");

class HulkingCyclops extends HulkingCyclopsBase {
  constructor (game) {
    super(game, "Hulking Cyclops", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HulkingCyclops;
