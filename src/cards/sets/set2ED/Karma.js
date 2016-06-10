"use strict";
const Constants = require ("../../../Constants");
const KarmaBase = require("../setCED/Karma");

class Karma extends KarmaBase {
  constructor (game) {
    super(game, "Karma", "Unlimited Edition", "2ED");
  }
}

module.exports = Karma;
