"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeviathanBase = require("../setBTD/Leviathan.js");

class Leviathan extends LeviathanBase {
  constructor(game) {
    super(game, "Leviathan", "The Dark", "DRK");
  }
}

module.exports = Leviathan;
