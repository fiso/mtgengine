"use strict";
const Constants = require ("../../../Constants");
const BraingeyserBase = require("../setCED/Braingeyser");

class Braingeyser extends BraingeyserBase {
  constructor (game) {
    super(game, "Braingeyser", "Limited Edition Beta", "LEB");
  }
}

module.exports = Braingeyser;
