"use strict";
const Constants = require ("../../../Constants");
const RakdosCarnariumBase = require("../setC18/RakdosCarnarium");

class RakdosCarnarium extends RakdosCarnariumBase {
  constructor (game) {
    super(game, "Rakdos Carnarium", "Commander 2016", "C16");
  }
}

module.exports = RakdosCarnarium;
