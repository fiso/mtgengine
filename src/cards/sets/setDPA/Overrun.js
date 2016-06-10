"use strict";
const Constants = require ("../../../Constants");
const OverrunBase = require("../setATH/Overrun");

class Overrun extends OverrunBase {
  constructor (game) {
    super(game, "Overrun", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Overrun;
