"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConservatorBase = require("../setCED/Conservator.js");

class Conservator extends ConservatorBase {
  constructor(game) {
    super(game, "Conservator", "Unlimited Edition", "2ED");
  }
}

module.exports = Conservator;
