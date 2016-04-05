"use strict";
const Constants = require ("../../../Constants");
const UktabiOrangutanBase = require("../setpARL/UktabiOrangutan");

class UktabiOrangutan extends UktabiOrangutanBase {
  constructor(game) {
    super(game, "Uktabi Orangutan", "Visions", "VIS");
  }
}

module.exports = UktabiOrangutan;
