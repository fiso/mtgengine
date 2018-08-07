"use strict";
const Constants = require ("../../../Constants");
const BraingeyserBase = require("../setME4/Braingeyser");

class Braingeyser extends BraingeyserBase {
  constructor (game) {
    super(game, "Braingeyser", "Revised Edition", "3ED");
  }
}

module.exports = Braingeyser;
