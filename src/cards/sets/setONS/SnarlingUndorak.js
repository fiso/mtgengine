"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnarlingUndorak extends UnimplementedCard {
  constructor(game) {
    super(game, "Snarling Undorak", "Onslaught", "ONS");
  }
}

module.exports = SnarlingUndorak;
