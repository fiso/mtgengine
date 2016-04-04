"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CracklingPerimeter extends Card {
  constructor(game) {
    super(game, "Crackling Perimeter", "Gatecrash", "GTC");
  }
}

module.exports = CracklingPerimeter;
