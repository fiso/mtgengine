"use strict";
const Constants = require ("../../../Constants");
const LudevicsAbominationBase = require("../setISD/LudevicsAbomination");

class LudevicsAbomination extends LudevicsAbominationBase {
  constructor (game) {
    super(game, "Ludevic's Abomination", "Launch Parties", "pLPA");
  }
}

module.exports = LudevicsAbomination;
