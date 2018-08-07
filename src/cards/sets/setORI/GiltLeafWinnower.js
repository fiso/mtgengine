"use strict";
const Constants = require ("../../../Constants");
const GiltLeafWinnowerBase = require("../setPORI/GiltLeafWinnower");

class GiltLeafWinnower extends GiltLeafWinnowerBase {
  constructor (game) {
    super(game, "Gilt-Leaf Winnower", "Magic Origins", "ORI");
  }
}

module.exports = GiltLeafWinnower;
