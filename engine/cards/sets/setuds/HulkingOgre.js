"use strict";
const Constants = require ("../../../Constants");
const HulkingOgreBase = require("../setS99/HulkingOgre");

class HulkingOgre extends HulkingOgreBase {
  constructor(game) {
    super(game, "Hulking Ogre", "Urza's Destiny", "UDS");
  }
}

module.exports = HulkingOgre;
