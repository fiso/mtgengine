"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifeforceBase = require("../setCED/Lifeforce.js");

class Lifeforce extends LifeforceBase {
  constructor(game) {
    super(game, "Lifeforce", "Revised Edition", "3ED");
  }
}

module.exports = Lifeforce;
