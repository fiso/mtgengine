"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindslicerBase = require("../set9ED/Mindslicer.js");

class Mindslicer extends MindslicerBase {
  constructor(game) {
    super(game, "Mindslicer", "Odyssey", "ODY");
  }
}

module.exports = Mindslicer;
