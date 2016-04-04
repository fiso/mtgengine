"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NightmareBase = require("../set6ED/Nightmare.js");

class Nightmare extends NightmareBase {
  constructor(game) {
    super(game, "Nightmare", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Nightmare;
