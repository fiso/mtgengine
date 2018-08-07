"use strict";
const Constants = require ("../../../Constants");
const PullfromTomorrowBase = require("../setAKH/PullfromTomorrow");

class PullfromTomorrow extends PullfromTomorrowBase {
  constructor (game) {
    super(game, "Pull from Tomorrow", "Amonkhet Promos", "PAKH");
  }
}

module.exports = PullfromTomorrow;
