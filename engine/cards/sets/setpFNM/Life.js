"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifeBase = require("../setAPC/Life.js");

class Life extends LifeBase {
  constructor(game) {
    super(game, "Life", "Friday Night Magic", "pFNM");
  }
}

module.exports = Life;
