"use strict";
const Constants = require ("../../../Constants");
const BurntOfferingBase = require("../setPZ2/BurntOffering");

class BurntOffering extends BurntOfferingBase {
  constructor (game) {
    super(game, "Burnt Offering", "Ice Age", "ICE");
  }
}

module.exports = BurntOffering;
