"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarkshellBlessing extends Card {
  constructor(game) {
    super(game, "Barkshell Blessing", "Shadowmoor", "SHM");
  }
}

module.exports = BarkshellBlessing;
