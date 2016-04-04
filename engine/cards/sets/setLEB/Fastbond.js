"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FastbondBase = require("../setCED/Fastbond.js");

class Fastbond extends FastbondBase {
  constructor(game) {
    super(game, "Fastbond", "Limited Edition Beta", "LEB");
  }
}

module.exports = Fastbond;
