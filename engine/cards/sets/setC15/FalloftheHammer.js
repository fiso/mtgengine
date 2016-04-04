"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FalloftheHammerBase = require("../setBNG/FalloftheHammer.js");

class FalloftheHammer extends FalloftheHammerBase {
  constructor(game) {
    super(game, "Fall of the Hammer", "Commander 2015", "C15");
  }
}

module.exports = FalloftheHammer;
