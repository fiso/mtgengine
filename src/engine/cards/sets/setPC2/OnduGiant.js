"use strict";
const Constants = require ("../../../Constants");
const OnduGiantBase = require("../setPCA/OnduGiant");

class OnduGiant extends OnduGiantBase {
  constructor (game) {
    super(game, "Ondu Giant", "Planechase 2012", "PC2");
  }
}

module.exports = OnduGiant;
