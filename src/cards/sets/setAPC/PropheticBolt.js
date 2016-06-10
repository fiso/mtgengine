"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PropheticBolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Prophetic Bolt", "Apocalypse", "APC");
  }
}

module.exports = PropheticBolt;
