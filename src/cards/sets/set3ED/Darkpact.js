"use strict";
const Constants = require ("../../../Constants");
const DarkpactBase = require("../setCED/Darkpact");

class Darkpact extends DarkpactBase {
  constructor (game) {
    super(game, "Darkpact", "Revised Edition", "3ED");
  }
}

module.exports = Darkpact;
