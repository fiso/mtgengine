"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrookclawElder extends Card {
  constructor(game) {
    super(game, "Crookclaw Elder", "Legions", "LGN");
  }
}

module.exports = CrookclawElder;
