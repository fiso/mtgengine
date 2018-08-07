"use strict";
const Constants = require ("../../../Constants");
const MycolothBase = require("../setCMA/Mycoloth");

class Mycoloth extends MycolothBase {
  constructor (game) {
    super(game, "Mycoloth", "Commander 2015", "C15");
  }
}

module.exports = Mycoloth;
