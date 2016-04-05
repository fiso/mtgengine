"use strict";
const Constants = require ("../../../Constants");
const BraingeyserBase = require("../setCED/Braingeyser");

class Braingeyser extends BraingeyserBase {
  constructor(game) {
    super(game, "Braingeyser", "Masters Edition IV", "ME4");
  }
}

module.exports = Braingeyser;
