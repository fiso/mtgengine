"use strict";
const Constants = require ("../../../Constants");
const KarmaBase = require("../setCED/Karma");

class Karma extends KarmaBase {
  constructor(game) {
    super(game, "Karma", "Fifth Edition", "5ED");
  }
}

module.exports = Karma;
