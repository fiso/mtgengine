"use strict";
const Constants = require ("../../../Constants");
const RakdosCarnariumBase = require("../setC18/RakdosCarnarium");

class RakdosCarnarium extends RakdosCarnariumBase {
  constructor (game) {
    super(game, "Rakdos Carnarium", "Commander 2013", "C13");
  }
}

module.exports = RakdosCarnarium;
