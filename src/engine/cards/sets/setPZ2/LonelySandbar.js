"use strict";
const Constants = require ("../../../Constants");
const LonelySandbarBase = require("../setC18/LonelySandbar");

class LonelySandbar extends LonelySandbarBase {
  constructor (game) {
    super(game, "Lonely Sandbar", "You Make the Cube", "PZ2");
  }
}

module.exports = LonelySandbar;
