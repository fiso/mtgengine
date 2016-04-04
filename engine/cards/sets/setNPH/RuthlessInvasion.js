"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuthlessInvasion extends Card {
  constructor(game) {
    super(game, "Ruthless Invasion", "New Phyrexia", "NPH");
  }
}

module.exports = RuthlessInvasion;
