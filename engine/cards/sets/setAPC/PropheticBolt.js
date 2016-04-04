"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PropheticBolt extends Card {
  constructor(game) {
    super(game, "Prophetic Bolt", "Apocalypse", "APC");
  }
}

module.exports = PropheticBolt;
