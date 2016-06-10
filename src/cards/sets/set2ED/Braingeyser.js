"use strict";
const Constants = require ("../../../Constants");
const BraingeyserBase = require("../setCED/Braingeyser");

class Braingeyser extends BraingeyserBase {
  constructor (game) {
    super(game, "Braingeyser", "Unlimited Edition", "2ED");
  }
}

module.exports = Braingeyser;
