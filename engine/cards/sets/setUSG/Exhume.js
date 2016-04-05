"use strict";
const Constants = require ("../../../Constants");
const ExhumeBase = require("../setBRB/Exhume");

class Exhume extends ExhumeBase {
  constructor(game) {
    super(game, "Exhume", "Urza's Saga", "USG");
  }
}

module.exports = Exhume;
