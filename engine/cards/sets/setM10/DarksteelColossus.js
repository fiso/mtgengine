"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarksteelColossusBase = require("../setDST/DarksteelColossus.js");

class DarksteelColossus extends DarksteelColossusBase {
  constructor(game) {
    super(game, "Darksteel Colossus", "Magic 2010", "M10");
  }
}

module.exports = DarksteelColossus;
