"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarElephantBase = require("../setARN/WarElephant.js");

class WarElephant extends WarElephantBase {
  constructor(game) {
    super(game, "War Elephant", "Chronicles", "CHR");
  }
}

module.exports = WarElephant;
