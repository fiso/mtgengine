"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicChorusBase = require("../set10E/AngelicChorus.js");

class AngelicChorus extends AngelicChorusBase {
  constructor(game) {
    super(game, "Angelic Chorus", "Urza's Saga", "USG");
  }
}

module.exports = AngelicChorus;
