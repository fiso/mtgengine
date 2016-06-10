"use strict";
const Constants = require ("../../../Constants");
const OnduGiantBase = require("../setDDP/OnduGiant");

class OnduGiant extends OnduGiantBase {
  constructor (game) {
    super(game, "Ondu Giant", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = OnduGiant;
