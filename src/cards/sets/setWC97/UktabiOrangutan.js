"use strict";
const Constants = require ("../../../Constants");
const UktabiOrangutanBase = require("../setPRM/UktabiOrangutan");

class UktabiOrangutan extends UktabiOrangutanBase {
  constructor (game) {
    super(game, "Uktabi Orangutan", "World Championship Decks 1997", "WC97");
  }
}

module.exports = UktabiOrangutan;
