"use strict";
const Constants = require ("../../../Constants");
const AkromaAngelofFuryBase = require("../setV15/AkromaAngelofFury");

class AkromaAngelofFury extends AkromaAngelofFuryBase {
  constructor(game) {
    super(game, "Akroma, Angel of Fury", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AkromaAngelofFury;
