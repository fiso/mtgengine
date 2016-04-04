"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skred extends Card {
  constructor(game) {
    super(game, "Skred", "Coldsnap", "CSP");
  }
}

module.exports = Skred;
