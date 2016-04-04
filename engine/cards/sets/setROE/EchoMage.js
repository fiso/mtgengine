"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EchoMageBase = require("../setC13/EchoMage.js");

class EchoMage extends EchoMageBase {
  constructor(game) {
    super(game, "Echo Mage", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EchoMage;
