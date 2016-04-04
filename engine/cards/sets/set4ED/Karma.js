"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarmaBase = require("../setCED/Karma.js");

class Karma extends KarmaBase {
  constructor(game) {
    super(game, "Karma", "Fourth Edition", "4ED");
  }
}

module.exports = Karma;
