"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CobblebruteBase = require("../setORI/Cobblebrute.js");

class Cobblebrute extends CobblebruteBase {
  constructor(game) {
    super(game, "Cobblebrute", "Return to Ravnica", "RTR");
  }
}

module.exports = Cobblebrute;
