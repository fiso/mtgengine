"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrzhovEuthanist extends Card {
  constructor(game) {
    super(game, "Orzhov Euthanist", "Guildpact", "GPT");
  }
}

module.exports = OrzhovEuthanist;
