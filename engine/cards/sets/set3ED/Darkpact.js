"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkpactBase = require("../setCED/Darkpact.js");

class Darkpact extends DarkpactBase {
  constructor(game) {
    super(game, "Darkpact", "Revised Edition", "3ED");
  }
}

module.exports = Darkpact;
