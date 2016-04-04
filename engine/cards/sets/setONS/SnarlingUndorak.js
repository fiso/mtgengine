"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnarlingUndorak extends Card {
  constructor(game) {
    super(game, "Snarling Undorak", "Onslaught", "ONS");
  }
}

module.exports = SnarlingUndorak;
