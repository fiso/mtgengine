"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindSludgeBase = require("../set8ED/MindSludge.js");

class MindSludge extends MindSludgeBase {
  constructor(game) {
    super(game, "Mind Sludge", "Torment", "TOR");
  }
}

module.exports = MindSludge;
