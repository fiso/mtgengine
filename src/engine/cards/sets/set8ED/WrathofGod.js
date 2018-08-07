"use strict";
const Constants = require ("../../../Constants");
const WrathofGodBase = require("../setMP2/WrathofGod");

class WrathofGod extends WrathofGodBase {
  constructor (game) {
    super(game, "Wrath of God", "Eighth Edition", "8ED");
  }
}

module.exports = WrathofGod;
