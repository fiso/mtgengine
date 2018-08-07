"use strict";
const Constants = require ("../../../Constants");
const EpiphanyattheDrownyardBase = require("../setSOI/EpiphanyattheDrownyard");

class EpiphanyattheDrownyard extends EpiphanyattheDrownyardBase {
  constructor (game) {
    super(game, "Epiphany at the Drownyard", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = EpiphanyattheDrownyard;
