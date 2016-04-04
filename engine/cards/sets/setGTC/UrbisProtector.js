"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrbisProtector extends Card {
  constructor(game) {
    super(game, "Urbis Protector", "Gatecrash", "GTC");
  }
}

module.exports = UrbisProtector;
