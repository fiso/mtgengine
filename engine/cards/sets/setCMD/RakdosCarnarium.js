"use strict";
const Constants = require ("../../../Constants");
const RakdosCarnariumBase = require("../setARC/RakdosCarnarium");

class RakdosCarnarium extends RakdosCarnariumBase {
  constructor(game) {
    super(game, "Rakdos Carnarium", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = RakdosCarnarium;
