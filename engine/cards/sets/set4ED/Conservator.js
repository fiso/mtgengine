"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConservatorBase = require("../setCED/Conservator.js");

class Conservator extends ConservatorBase {
  constructor(game) {
    super(game, "Conservator", "Fourth Edition", "4ED");
  }
}

module.exports = Conservator;
