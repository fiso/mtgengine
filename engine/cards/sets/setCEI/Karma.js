"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarmaBase = require("../setCED/Karma.js");

class Karma extends KarmaBase {
  constructor(game) {
    super(game, "Karma", "International Collector's Edition", "CEI");
  }
}

module.exports = Karma;
