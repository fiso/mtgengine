"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FarmsteadBase = require("../setCED/Farmstead.js");

class Farmstead extends FarmsteadBase {
  constructor(game) {
    super(game, "Farmstead", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Farmstead;
