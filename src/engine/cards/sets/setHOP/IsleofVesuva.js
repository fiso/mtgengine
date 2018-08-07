"use strict";
const Constants = require ("../../../Constants");
const IsleofVesuvaBase = require("../setPCA/IsleofVesuva");

class IsleofVesuva extends IsleofVesuvaBase {
  constructor (game) {
    super(game, "Isle of Vesuva", "Planechase", "HOP");
  }
}

module.exports = IsleofVesuva;
