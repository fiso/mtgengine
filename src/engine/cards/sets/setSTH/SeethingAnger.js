"use strict";
const Constants = require ("../../../Constants");
const SeethingAngerBase = require("../setTPR/SeethingAnger");

class SeethingAnger extends SeethingAngerBase {
  constructor (game) {
    super(game, "Seething Anger", "Stronghold", "STH");
  }
}

module.exports = SeethingAnger;
