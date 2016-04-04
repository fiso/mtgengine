"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Timbermare extends Card {
  constructor(game) {
    super(game, "Timbermare", "Planar Chaos", "PLC");
  }
}

module.exports = Timbermare;
