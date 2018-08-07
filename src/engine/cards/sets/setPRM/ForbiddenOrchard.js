"use strict";
const Constants = require ("../../../Constants");
const ForbiddenOrchardBase = require("../setC16/ForbiddenOrchard");

class ForbiddenOrchard extends ForbiddenOrchardBase {
  constructor (game) {
    super(game, "Forbidden Orchard", "Magic Online Promos", "PRM");
  }
}

module.exports = ForbiddenOrchard;
