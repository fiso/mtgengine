"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavingOniSlave extends UnimplementedCard {
  constructor (game) {
    super(game, "Raving Oni-Slave", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RavingOniSlave;
