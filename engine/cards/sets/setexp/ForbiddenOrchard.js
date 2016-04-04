"use strict";
const Constants = require ("../../../Constants");
const ForbiddenOrchardBase = require("../setCHK/ForbiddenOrchard");

class ForbiddenOrchard extends ForbiddenOrchardBase {
  constructor(game) {
    super(game, "Forbidden Orchard", "Zendikar Expedition", "EXP");
  }
}

module.exports = ForbiddenOrchard;
