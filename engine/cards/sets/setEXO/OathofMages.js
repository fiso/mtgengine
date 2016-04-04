"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OathofMages extends Card {
  constructor(game) {
    super(game, "Oath of Mages", "Exodus", "EXO");
  }
}

module.exports = OathofMages;
