"use strict";
const Constants = require ("../../../Constants");
const MindSludgeBase = require("../set8ED/MindSludge");

class MindSludge extends MindSludgeBase {
  constructor (game) {
    super(game, "Mind Sludge", "Zendikar", "ZEN");
  }
}

module.exports = MindSludge;
