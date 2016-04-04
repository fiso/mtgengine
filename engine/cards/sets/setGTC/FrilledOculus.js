"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrilledOculus extends Card {
  constructor(game) {
    super(game, "Frilled Oculus", "Gatecrash", "GTC");
  }
}

module.exports = FrilledOculus;
