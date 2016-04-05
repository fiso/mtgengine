"use strict";
const Constants = require ("../../../Constants");
const MindslicerBase = require("../set9ED/Mindslicer");

class Mindslicer extends MindslicerBase {
  constructor(game) {
    super(game, "Mindslicer", "Odyssey", "ODY");
  }
}

module.exports = Mindslicer;
