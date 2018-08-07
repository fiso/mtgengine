"use strict";
const Constants = require ("../../../Constants");
const GiltLeafSeerBase = require("../setDDR/GiltLeafSeer");

class GiltLeafSeer extends GiltLeafSeerBase {
  constructor (game) {
    super(game, "Gilt-Leaf Seer", "Lorwyn", "LRW");
  }
}

module.exports = GiltLeafSeer;
