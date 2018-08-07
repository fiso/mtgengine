"use strict";
const Constants = require ("../../../Constants");
const EmergeUnscathedBase = require("../setIMA/EmergeUnscathed");

class EmergeUnscathed extends EmergeUnscathedBase {
  constructor (game) {
    super(game, "Emerge Unscathed", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EmergeUnscathed;
