"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BelbesPortal extends Card {
  constructor(game) {
    super(game, "Belbe's Portal", "Nemesis", "NMS");
  }
}

module.exports = BelbesPortal;
