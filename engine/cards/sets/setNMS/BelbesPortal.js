"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelbesPortal extends UnimplementedCard {
  constructor(game) {
    super(game, "Belbe's Portal", "Nemesis", "NMS");
  }
}

module.exports = BelbesPortal;
