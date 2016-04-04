"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireFieldOgreBase = require("../setDDH/FireFieldOgre.js");

class FireFieldOgre extends FireFieldOgreBase {
  constructor(game) {
    super(game, "Fire-Field Ogre", "Shards of Alara", "ALA");
  }
}

module.exports = FireFieldOgre;
