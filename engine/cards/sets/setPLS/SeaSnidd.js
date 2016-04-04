"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaSnidd extends Card {
  constructor(game) {
    super(game, "Sea Snidd", "Planeshift", "PLS");
  }
}

module.exports = SeaSnidd;
