"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnnervingAssault extends Card {
  constructor(game) {
    super(game, "Unnerving Assault", "Eventide", "EVE");
  }
}

module.exports = UnnervingAssault;
