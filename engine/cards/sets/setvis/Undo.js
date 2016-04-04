"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UndoBase = require("../setPO2/Undo.js");

class Undo extends UndoBase {
  constructor(game) {
    super(game, "Undo", "Visions", "VIS");
  }
}

module.exports = Undo;
