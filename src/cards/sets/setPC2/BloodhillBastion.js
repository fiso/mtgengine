"use strict";
const Constants = require ("../../../Constants");
const BloodhillBastionBase = require("../setPCA/BloodhillBastion");

class BloodhillBastion extends BloodhillBastionBase {
  constructor (game) {
    super(game, "Bloodhill Bastion", "Planechase 2012", "PC2");
  }
}

module.exports = BloodhillBastion;
