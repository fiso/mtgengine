"use strict";
const Constants = require ("../../../Constants");
const RakdosCarnariumBase = require("../setARC/RakdosCarnarium");

class RakdosCarnarium extends RakdosCarnariumBase {
  constructor(game) {
    super(game, "Rakdos Carnarium", "Dissension", "DIS");
  }
}

module.exports = RakdosCarnarium;
