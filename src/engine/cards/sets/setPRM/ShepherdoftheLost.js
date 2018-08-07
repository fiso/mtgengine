"use strict";
const Constants = require ("../../../Constants");
const ShepherdoftheLostBase = require("../setZEN/ShepherdoftheLost");

class ShepherdoftheLost extends ShepherdoftheLostBase {
  constructor (game) {
    super(game, "Shepherd of the Lost", "Magic Online Promos", "PRM");
  }
}

module.exports = ShepherdoftheLost;
