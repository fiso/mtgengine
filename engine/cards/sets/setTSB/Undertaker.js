"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UndertakerBase = require("../setMMQ/Undertaker.js");

class Undertaker extends UndertakerBase {
  constructor(game) {
    super(game, "Undertaker", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Undertaker;
