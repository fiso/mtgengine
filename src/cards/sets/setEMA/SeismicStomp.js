"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicStomp extends UnimplementedCard {
  constructor (game) {
    super(game, "Seismic Stomp", "Eternal Masters", "EMA");
  }
}

module.exports = SeismicStomp;
