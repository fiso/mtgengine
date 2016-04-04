"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerminalMoraine extends Card {
  constructor(game) {
    super(game, "Terminal Moraine", "Planeshift", "PLS");
  }
}

module.exports = TerminalMoraine;
