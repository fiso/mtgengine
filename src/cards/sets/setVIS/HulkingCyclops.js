"use strict";
const Constants = require ("../../../Constants");
const HulkingCyclopsBase = require("../setBTD/HulkingCyclops");

class HulkingCyclops extends HulkingCyclopsBase {
  constructor (game) {
    super(game, "Hulking Cyclops", "Visions", "VIS");
  }
}

module.exports = HulkingCyclops;
