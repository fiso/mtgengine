"use strict";
const Constants = require ("../../../Constants");
const SeismicStompBase = require("../setEMA/SeismicStomp");

class SeismicStomp extends SeismicStompBase {
  constructor (game) {
    super(game, "Seismic Stomp", "Magic 2014", "M14");
  }
}

module.exports = SeismicStomp;
