"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Commandeer extends Card {
  constructor(game) {
    super(game, "Commandeer", "Coldsnap", "CSP");
  }
}

module.exports = Commandeer;
