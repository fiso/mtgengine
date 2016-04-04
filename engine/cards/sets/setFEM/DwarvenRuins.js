"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DwarvenRuinsBase = require("../setBTD/DwarvenRuins.js");

class DwarvenRuins extends DwarvenRuinsBase {
  constructor(game) {
    super(game, "Dwarven Ruins", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenRuins;
