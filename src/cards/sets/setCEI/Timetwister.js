"use strict";
const Constants = require ("../../../Constants");
const TimetwisterBase = require("../setVMA/Timetwister");

class Timetwister extends TimetwisterBase {
  constructor (game) {
    super(game, "Timetwister", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Timetwister;
