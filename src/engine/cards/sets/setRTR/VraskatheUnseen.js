"use strict";
const Constants = require ("../../../Constants");
const VraskatheUnseenBase = require("../setDDM/VraskatheUnseen");

class VraskatheUnseen extends VraskatheUnseenBase {
  constructor (game) {
    super(game, "Vraska the Unseen", "Return to Ravnica", "RTR");
  }
}

module.exports = VraskatheUnseen;
