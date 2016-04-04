"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterofDiversion extends Card {
  constructor(game) {
    super(game, "Master of Diversion", "Magic 2014 Core Set", "M14");
  }
}

module.exports = MasterofDiversion;
