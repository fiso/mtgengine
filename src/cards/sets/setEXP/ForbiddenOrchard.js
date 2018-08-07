"use strict";
const Constants = require ("../../../Constants");
const ForbiddenOrchardBase = require("../setC16/ForbiddenOrchard");

class ForbiddenOrchard extends ForbiddenOrchardBase {
  constructor (game) {
    super(game, "Forbidden Orchard", "Zendikar Expeditions", "EXP");
  }
}

module.exports = ForbiddenOrchard;
