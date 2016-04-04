"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightofMeadowgrainBase = require("../setDDG/KnightofMeadowgrain.js");

class KnightofMeadowgrain extends KnightofMeadowgrainBase {
  constructor(game) {
    super(game, "Knight of Meadowgrain", "Lorwyn", "LRW");
  }
}

module.exports = KnightofMeadowgrain;
