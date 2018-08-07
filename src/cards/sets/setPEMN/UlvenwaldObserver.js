"use strict";
const Constants = require ("../../../Constants");
const UlvenwaldObserverBase = require("../setEMN/UlvenwaldObserver");

class UlvenwaldObserver extends UlvenwaldObserverBase {
  constructor (game) {
    super(game, "Ulvenwald Observer", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = UlvenwaldObserver;
