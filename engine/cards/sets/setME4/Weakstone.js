"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeakstoneBase = require("../setATQ/Weakstone.js");

class Weakstone extends WeakstoneBase {
  constructor(game) {
    super(game, "Weakstone", "Masters Edition IV", "ME4");
  }
}

module.exports = Weakstone;
