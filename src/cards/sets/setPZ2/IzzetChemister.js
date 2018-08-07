"use strict";
const Constants = require ("../../../Constants");
const IzzetChemisterBase = require("../setA25/IzzetChemister");

class IzzetChemister extends IzzetChemisterBase {
  constructor (game) {
    super(game, "Izzet Chemister", "You Make the Cube", "PZ2");
  }
}

module.exports = IzzetChemister;
