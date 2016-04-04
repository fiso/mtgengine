"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArgentSphinx extends Card {
  constructor(game) {
    super(game, "Argent Sphinx", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ArgentSphinx;
