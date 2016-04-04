"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkromaAngelofFuryBase = require("../setV15/AkromaAngelofFury.js");

class AkromaAngelofFury extends AkromaAngelofFuryBase {
  constructor(game) {
    super(game, "Akroma, Angel of Fury", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AkromaAngelofFury;
