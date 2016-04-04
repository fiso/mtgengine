"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Draco extends Card {
  constructor(game) {
    super(game, "Draco", "From the Vault: Dragons", "DRB");
  }
}

module.exports = Draco;
