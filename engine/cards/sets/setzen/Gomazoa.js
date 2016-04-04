"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GomazoaBase = require("../setCMD/Gomazoa.js");

class Gomazoa extends GomazoaBase {
  constructor(game) {
    super(game, "Gomazoa", "Zendikar", "ZEN");
  }
}

module.exports = Gomazoa;
