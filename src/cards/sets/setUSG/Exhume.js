"use strict";
const Constants = require ("../../../Constants");
const ExhumeBase = require("../setPD3/Exhume");

class Exhume extends ExhumeBase {
  constructor (game) {
    super(game, "Exhume", "Urza's Saga", "USG");
  }
}

module.exports = Exhume;
