"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarPriestofThuneBase = require("../setM11/WarPriestofThune.js");

class WarPriestofThune extends WarPriestofThuneBase {
  constructor(game) {
    super(game, "War Priest of Thune", "Magic 2013", "M13");
  }
}

module.exports = WarPriestofThune;
