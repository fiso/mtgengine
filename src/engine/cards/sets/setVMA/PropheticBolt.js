"use strict";
const Constants = require ("../../../Constants");
const PropheticBoltBase = require("../setC15/PropheticBolt");

class PropheticBolt extends PropheticBoltBase {
  constructor (game) {
    super(game, "Prophetic Bolt", "Vintage Masters", "VMA");
  }
}

module.exports = PropheticBolt;
