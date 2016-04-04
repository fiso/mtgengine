"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifeforceBase = require("../setCED/Lifeforce.js");

class Lifeforce extends LifeforceBase {
  constructor(game) {
    super(game, "Lifeforce", "Limited Edition Beta", "LEB");
  }
}

module.exports = Lifeforce;
