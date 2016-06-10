"use strict";
const Constants = require ("../../../Constants");
const WrathofGodBase = require("../setBRB/WrathofGod");

class WrathofGod extends WrathofGodBase {
  constructor (game) {
    super(game, "Wrath of God", "Ninth Edition", "9ED");
  }
}

module.exports = WrathofGod;
