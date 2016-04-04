"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IslandBase = require("../setARC/Island.js");

class Island extends IslandBase {
  constructor(game) {
    super(game, "Island", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Island;
