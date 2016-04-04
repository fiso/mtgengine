"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UktabiOrangutanBase = require("../setpARL/UktabiOrangutan.js");

class UktabiOrangutan extends UktabiOrangutanBase {
  constructor(game) {
    super(game, "Uktabi Orangutan", "Classic Sixth Edition", "6ED");
  }
}

module.exports = UktabiOrangutan;
