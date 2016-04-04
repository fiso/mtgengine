"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HulkingCyclopsBase = require("../setBTD/HulkingCyclops.js");

class HulkingCyclops extends HulkingCyclopsBase {
  constructor(game) {
    super(game, "Hulking Cyclops", "Portal", "POR");
  }
}

module.exports = HulkingCyclops;
