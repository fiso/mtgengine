"use strict";
const Constants = require ("../../../Constants");
const SubmergeBase = require("../setWC00/Submerge");

class Submerge extends SubmergeBase {
  constructor (game) {
    super(game, "Submerge", "Nemesis", "NEM");
  }
}

module.exports = Submerge;
