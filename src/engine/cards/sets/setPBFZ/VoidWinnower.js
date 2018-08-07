"use strict";
const Constants = require ("../../../Constants");
const VoidWinnowerBase = require("../setBFZ/VoidWinnower");

class VoidWinnower extends VoidWinnowerBase {
  constructor (game) {
    super(game, "Void Winnower", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = VoidWinnower;
