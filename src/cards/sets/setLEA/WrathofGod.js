"use strict";
const Constants = require ("../../../Constants");
const WrathofGodBase = require("../setBRB/WrathofGod");

class WrathofGod extends WrathofGodBase {
  constructor (game) {
    super(game, "Wrath of God", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WrathofGod;
