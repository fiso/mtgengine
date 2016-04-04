"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PuppetMaster extends Card {
  constructor(game) {
    super(game, "Puppet Master", "Chronicles", "CHR");
  }
}

module.exports = PuppetMaster;
