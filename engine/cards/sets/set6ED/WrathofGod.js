"use strict";
const Constants = require ("../../../Constants");
const WrathofGodBase = require("../setBRB/WrathofGod");

class WrathofGod extends WrathofGodBase {
  constructor(game) {
    super(game, "Wrath of God", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WrathofGod;
