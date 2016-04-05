"use strict";
const Constants = require ("../../../Constants");
const PropheticBoltBase = require("../setAPC/PropheticBolt");

class PropheticBolt extends PropheticBoltBase {
  constructor(game) {
    super(game, "Prophetic Bolt", "Commander 2015", "C15");
  }
}

module.exports = PropheticBolt;
