"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LudevicsAbominationBase = require("../setISD/LudevicsAbomination.js");

class LudevicsAbomination extends LudevicsAbominationBase {
  constructor(game) {
    super(game, "Ludevic's Abomination", "Launch Parties", "pLPA");
  }
}

module.exports = LudevicsAbomination;
