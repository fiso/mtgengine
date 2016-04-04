"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavingOniSlave extends Card {
  constructor(game) {
    super(game, "Raving Oni-Slave", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RavingOniSlave;
