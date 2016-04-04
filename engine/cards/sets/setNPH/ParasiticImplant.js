"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParasiticImplant extends Card {
  constructor(game) {
    super(game, "Parasitic Implant", "New Phyrexia", "NPH");
  }
}

module.exports = ParasiticImplant;
