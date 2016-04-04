"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StasisBase = require("../setCED/Stasis.js");

class Stasis extends StasisBase {
  constructor(game) {
    super(game, "Stasis", "Revised Edition", "3ED");
  }
}

module.exports = Stasis;
