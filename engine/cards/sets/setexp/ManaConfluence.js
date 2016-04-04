"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaConfluenceBase = require("../setJOU/ManaConfluence.js");

class ManaConfluence extends ManaConfluenceBase {
  constructor(game) {
    super(game, "Mana Confluence", "Zendikar Expedition", "EXP");
  }
}

module.exports = ManaConfluence;
