"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuppetMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Puppet Master", "Chronicles", "CHR");
  }
}

module.exports = PuppetMaster;
