"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoulderSalvo extends Card {
  constructor(game) {
    super(game, "Boulder Salvo", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BoulderSalvo;
