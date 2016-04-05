"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrixisSlavedriver extends UnimplementedCard {
  constructor(game) {
    super(game, "Grixis Slavedriver", "Conflux", "CON");
  }
}

module.exports = GrixisSlavedriver;
