"use strict";
const Constants = require ("../../../Constants");
const FalkenrathGorgerBase = require("../setSOI/FalkenrathGorger");

class FalkenrathGorger extends FalkenrathGorgerBase {
  constructor (game) {
    super(game, "Falkenrath Gorger", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = FalkenrathGorger;
