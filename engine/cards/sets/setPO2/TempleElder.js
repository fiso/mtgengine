"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempleElder extends Card {
  constructor(game) {
    super(game, "Temple Elder", "Portal Second Age", "PO2");
  }
}

module.exports = TempleElder;
