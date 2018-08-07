"use strict";
const Constants = require ("../../../Constants");
const UktabiOrangutanBase = require("../setPRM/UktabiOrangutan");

class UktabiOrangutan extends UktabiOrangutanBase {
  constructor (game) {
    super(game, "Uktabi Orangutan", "World Championship Decks 1998", "WC98");
  }
}

module.exports = UktabiOrangutan;
