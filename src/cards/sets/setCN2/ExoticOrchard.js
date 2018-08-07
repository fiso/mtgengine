"use strict";
const Constants = require ("../../../Constants");
const ExoticOrchardBase = require("../setCM2/ExoticOrchard");

class ExoticOrchard extends ExoticOrchardBase {
  constructor (game) {
    super(game, "Exotic Orchard", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ExoticOrchard;
