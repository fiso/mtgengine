"use strict";
const Constants = require ("../../../Constants");
const FireFieldOgreBase = require("../setDDH/FireFieldOgre");

class FireFieldOgre extends FireFieldOgreBase {
  constructor(game) {
    super(game, "Fire-Field Ogre", "Shards of Alara", "ALA");
  }
}

module.exports = FireFieldOgre;
