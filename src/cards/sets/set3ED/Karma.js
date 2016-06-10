"use strict";
const Constants = require ("../../../Constants");
const KarmaBase = require("../setCED/Karma");

class Karma extends KarmaBase {
  constructor (game) {
    super(game, "Karma", "Revised Edition", "3ED");
  }
}

module.exports = Karma;
