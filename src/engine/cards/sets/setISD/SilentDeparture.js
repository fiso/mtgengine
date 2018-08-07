"use strict";
const Constants = require ("../../../Constants");
const SilentDepartureBase = require("../setEMA/SilentDeparture");

class SilentDeparture extends SilentDepartureBase {
  constructor (game) {
    super(game, "Silent Departure", "Innistrad", "ISD");
  }
}

module.exports = SilentDeparture;
