"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JoragaAuxiliary extends Card {
  constructor(game) {
    super(game, "Joraga Auxiliary", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = JoragaAuxiliary;
