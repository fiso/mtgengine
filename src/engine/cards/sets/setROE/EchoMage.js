"use strict";
const Constants = require ("../../../Constants");
const EchoMageBase = require("../setC13/EchoMage");

class EchoMage extends EchoMageBase {
  constructor (game) {
    super(game, "Echo Mage", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EchoMage;
