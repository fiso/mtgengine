"use strict";
const Constants = require ("../../../Constants");
const UktabiOrangutanBase = require("../setPRM/UktabiOrangutan");

class UktabiOrangutan extends UktabiOrangutanBase {
  constructor (game) {
    super(game, "Uktabi Orangutan", "Arena League 2000", "PAL00");
  }
}

module.exports = UktabiOrangutan;
