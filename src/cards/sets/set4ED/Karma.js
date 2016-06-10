"use strict";
const Constants = require ("../../../Constants");
const KarmaBase = require("../setCED/Karma");

class Karma extends KarmaBase {
  constructor (game) {
    super(game, "Karma", "Fourth Edition", "4ED");
  }
}

module.exports = Karma;
