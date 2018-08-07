"use strict";
const Constants = require ("../../../Constants");
const WrathofGodBase = require("../setMP2/WrathofGod");

class WrathofGod extends WrathofGodBase {
  constructor (game) {
    super(game, "Wrath of God", "Limited Edition Beta", "LEB");
  }
}

module.exports = WrathofGod;
