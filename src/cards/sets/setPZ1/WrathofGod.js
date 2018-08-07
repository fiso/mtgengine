"use strict";
const Constants = require ("../../../Constants");
const WrathofGodBase = require("../setMP2/WrathofGod");

class WrathofGod extends WrathofGodBase {
  constructor (game) {
    super(game, "Wrath of God", "Legendary Cube", "PZ1");
  }
}

module.exports = WrathofGod;
