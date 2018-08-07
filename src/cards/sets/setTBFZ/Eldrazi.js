"use strict";
const Constants = require ("../../../Constants");
const EldraziBase = require("../setTPCA/Eldrazi");

class Eldrazi extends EldraziBase {
  constructor (game) {
    super(game, "Eldrazi", "Battle for Zendikar Tokens", "TBFZ");
  }
}

module.exports = Eldrazi;
