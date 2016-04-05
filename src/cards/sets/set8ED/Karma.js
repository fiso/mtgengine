"use strict";
const Constants = require ("../../../Constants");
const KarmaBase = require("../setCED/Karma");

class Karma extends KarmaBase {
  constructor(game) {
    super(game, "Karma", "Eighth Edition", "8ED");
  }
}

module.exports = Karma;
