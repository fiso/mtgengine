"use strict";
const Constants = require ("../../../Constants");
const MycolothBase = require("../setCMA/Mycoloth");

class Mycoloth extends MycolothBase {
  constructor (game) {
    super(game, "Mycoloth", "Planechase 2012", "PC2");
  }
}

module.exports = Mycoloth;
