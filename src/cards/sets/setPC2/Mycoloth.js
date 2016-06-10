"use strict";
const Constants = require ("../../../Constants");
const MycolothBase = require("../setC15/Mycoloth");

class Mycoloth extends MycolothBase {
  constructor (game) {
    super(game, "Mycoloth", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Mycoloth;
