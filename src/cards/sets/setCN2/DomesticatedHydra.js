"use strict";
const Constants = require ("../../../Constants");
const DomesticatedHydraBase = require("../setPZ2/DomesticatedHydra");

class DomesticatedHydra extends DomesticatedHydraBase {
  constructor (game) {
    super(game, "Domesticated Hydra", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = DomesticatedHydra;
