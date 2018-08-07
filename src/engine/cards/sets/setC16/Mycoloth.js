"use strict";
const Constants = require ("../../../Constants");
const MycolothBase = require("../setCMA/Mycoloth");

class Mycoloth extends MycolothBase {
  constructor (game) {
    super(game, "Mycoloth", "Commander 2016", "C16");
  }
}

module.exports = Mycoloth;
