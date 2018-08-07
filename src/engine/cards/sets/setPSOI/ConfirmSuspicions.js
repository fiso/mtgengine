"use strict";
const Constants = require ("../../../Constants");
const ConfirmSuspicionsBase = require("../setSOI/ConfirmSuspicions");

class ConfirmSuspicions extends ConfirmSuspicionsBase {
  constructor (game) {
    super(game, "Confirm Suspicions", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = ConfirmSuspicions;
