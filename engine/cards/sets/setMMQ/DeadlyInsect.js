"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeadlyInsectBase = require("../setALL/DeadlyInsect.js");

class DeadlyInsect extends DeadlyInsectBase {
  constructor(game) {
    super(game, "Deadly Insect", "Mercadian Masques", "MMQ");
  }
}

module.exports = DeadlyInsect;
