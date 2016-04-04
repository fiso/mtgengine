"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishLyristBase = require("../setBRB/ElvishLyrist.js");

class ElvishLyrist extends ElvishLyristBase {
  constructor(game) {
    super(game, "Elvish Lyrist", "Urza's Saga", "USG");
  }
}

module.exports = ElvishLyrist;
