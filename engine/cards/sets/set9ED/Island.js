"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IslandBase = require("../setARC/Island.js");

class Island extends IslandBase {
  constructor(game) {
    super(game, "Island", "Ninth Edition", "9ED");
  }
}

module.exports = Island;
