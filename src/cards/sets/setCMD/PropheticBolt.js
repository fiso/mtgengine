"use strict";
const Constants = require ("../../../Constants");
const PropheticBoltBase = require("../setAPC/PropheticBolt");

class PropheticBolt extends PropheticBoltBase {
  constructor(game) {
    super(game, "Prophetic Bolt", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PropheticBolt;
