"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OcularHalo extends Card {
  constructor(game) {
    super(game, "Ocular Halo", "Dissension", "DIS");
  }
}

module.exports = OcularHalo;
