"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SylvanHierophant extends Card {
  constructor(game) {
    super(game, "Sylvan Hierophant", "Weatherlight", "WTH");
  }
}

module.exports = SylvanHierophant;
