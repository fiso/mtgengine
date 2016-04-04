"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerrorBase = require("../setATH/Terror.js");

class Terror extends TerrorBase {
  constructor(game) {
    super(game, "Terror", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = Terror;
