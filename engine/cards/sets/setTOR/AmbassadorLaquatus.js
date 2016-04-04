"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AmbassadorLaquatusBase = require("../set10E/AmbassadorLaquatus.js");

class AmbassadorLaquatus extends AmbassadorLaquatusBase {
  constructor(game) {
    super(game, "Ambassador Laquatus", "Torment", "TOR");
  }
}

module.exports = AmbassadorLaquatus;
