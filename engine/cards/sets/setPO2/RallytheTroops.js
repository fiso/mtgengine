"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RallytheTroops extends Card {
  constructor(game) {
    super(game, "Rally the Troops", "Portal Second Age", "PO2");
  }
}

module.exports = RallytheTroops;
