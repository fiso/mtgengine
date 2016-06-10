"use strict";
const Constants = require ("../../../Constants");
const LifeBase = require("../setAPC/Life");

class Life extends LifeBase {
  constructor (game) {
    super(game, "Life", "Friday Night Magic", "pFNM");
  }
}

module.exports = Life;
