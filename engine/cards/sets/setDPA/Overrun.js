"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverrunBase = require("../setATH/Overrun.js");

class Overrun extends OverrunBase {
  constructor(game) {
    super(game, "Overrun", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Overrun;
