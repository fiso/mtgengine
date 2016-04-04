"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneforgeMasterwork extends Card {
  constructor(game) {
    super(game, "Stoneforge Masterwork", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StoneforgeMasterwork;
