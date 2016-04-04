"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FastbondBase = require("../setCED/Fastbond.js");

class Fastbond extends FastbondBase {
  constructor(game) {
    super(game, "Fastbond", "Revised Edition", "3ED");
  }
}

module.exports = Fastbond;
