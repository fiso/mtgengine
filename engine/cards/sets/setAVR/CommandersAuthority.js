"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CommandersAuthority extends Card {
  constructor(game) {
    super(game, "Commander's Authority", "Avacyn Restored", "AVR");
  }
}

module.exports = CommandersAuthority;
