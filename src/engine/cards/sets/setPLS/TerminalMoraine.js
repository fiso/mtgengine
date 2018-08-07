"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerminalMoraine extends UnimplementedCard {
  constructor (game) {
    super(game, "Terminal Moraine", "Planeshift", "PLS");
  }
}

module.exports = TerminalMoraine;
