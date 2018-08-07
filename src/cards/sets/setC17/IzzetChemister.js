"use strict";
const Constants = require ("../../../Constants");
const IzzetChemisterBase = require("../setA25/IzzetChemister");

class IzzetChemister extends IzzetChemisterBase {
  constructor (game) {
    super(game, "Izzet Chemister", "Commander 2017", "C17");
  }
}

module.exports = IzzetChemister;
