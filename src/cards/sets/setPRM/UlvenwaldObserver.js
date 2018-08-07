"use strict";
const Constants = require ("../../../Constants");
const UlvenwaldObserverBase = require("../setEMN/UlvenwaldObserver");

class UlvenwaldObserver extends UlvenwaldObserverBase {
  constructor (game) {
    super(game, "Ulvenwald Observer", "Magic Online Promos", "PRM");
  }
}

module.exports = UlvenwaldObserver;
