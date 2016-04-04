"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SorcerersStrongboxBase = require("../setARC/SorcerersStrongbox.js");

class SorcerersStrongbox extends SorcerersStrongboxBase {
  constructor(game) {
    super(game, "Sorcerer's Strongbox", "Magic 2011", "M11");
  }
}

module.exports = SorcerersStrongbox;
