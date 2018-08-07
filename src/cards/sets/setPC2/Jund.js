"use strict";
const Constants = require ("../../../Constants");
const JundBase = require("../setPCA/Jund");

class Jund extends JundBase {
  constructor (game) {
    super(game, "Jund", "Planechase 2012", "PC2");
  }
}

module.exports = Jund;
