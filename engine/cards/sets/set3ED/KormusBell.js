"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KormusBellBase = require("../setCED/KormusBell.js");

class KormusBell extends KormusBellBase {
  constructor(game) {
    super(game, "Kormus Bell", "Revised Edition", "3ED");
  }
}

module.exports = KormusBell;
