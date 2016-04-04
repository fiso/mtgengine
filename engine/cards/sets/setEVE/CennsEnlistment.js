"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CennsEnlistment extends Card {
  constructor(game) {
    super(game, "Cenn's Enlistment", "Eventide", "EVE");
  }
}

module.exports = CennsEnlistment;
