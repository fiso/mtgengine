"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExhumeBase = require("../setBRB/Exhume.js");

class Exhume extends ExhumeBase {
  constructor(game) {
    super(game, "Exhume", "Urza's Saga", "USG");
  }
}

module.exports = Exhume;
