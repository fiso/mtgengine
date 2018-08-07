"use strict";
const Constants = require ("../../../Constants");
const HulkingCyclopsBase = require("../set8ED/HulkingCyclops");

class HulkingCyclops extends HulkingCyclopsBase {
  constructor (game) {
    super(game, "Hulking Cyclops", "Visions", "VIS");
  }
}

module.exports = HulkingCyclops;
