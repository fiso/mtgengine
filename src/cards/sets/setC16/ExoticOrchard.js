"use strict";
const Constants = require ("../../../Constants");
const ExoticOrchardBase = require("../setCM2/ExoticOrchard");

class ExoticOrchard extends ExoticOrchardBase {
  constructor (game) {
    super(game, "Exotic Orchard", "Commander 2016", "C16");
  }
}

module.exports = ExoticOrchard;
