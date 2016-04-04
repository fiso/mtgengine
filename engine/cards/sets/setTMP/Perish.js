"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PerishBase = require("../set6ED/Perish.js");

class Perish extends PerishBase {
  constructor(game) {
    super(game, "Perish", "Tempest", "TMP");
  }
}

module.exports = Perish;
