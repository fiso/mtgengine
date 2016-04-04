"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragDown extends Card {
  constructor(game) {
    super(game, "Drag Down", "Conflux", "CON");
  }
}

module.exports = DragDown;
