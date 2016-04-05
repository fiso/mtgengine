"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicStomp extends UnimplementedCard {
  constructor(game) {
    super(game, "Seismic Stomp", "Magic 2014 Core Set", "M14");
  }
}

module.exports = SeismicStomp;
