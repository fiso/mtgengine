"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RogueKavuBase = require("../setINV/RogueKavu.js");

class RogueKavu extends RogueKavuBase {
  constructor(game) {
    super(game, "Rogue Kavu", "Ninth Edition", "9ED");
  }
}

module.exports = RogueKavu;
