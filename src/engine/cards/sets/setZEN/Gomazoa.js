"use strict";
const Constants = require ("../../../Constants");
const GomazoaBase = require("../setCMD/Gomazoa");

class Gomazoa extends GomazoaBase {
  constructor (game) {
    super(game, "Gomazoa", "Zendikar", "ZEN");
  }
}

module.exports = Gomazoa;
