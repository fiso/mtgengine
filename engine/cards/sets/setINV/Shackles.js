"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShacklesBase = require("../setEXO/Shackles.js");

class Shackles extends ShacklesBase {
  constructor(game) {
    super(game, "Shackles", "Invasion", "INV");
  }
}

module.exports = Shackles;
