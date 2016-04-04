"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinWarDrumsBase = require("../setFEM/GoblinWarDrums.js");

class GoblinWarDrums extends GoblinWarDrumsBase {
  constructor(game) {
    super(game, "Goblin War Drums", "Fifth Edition", "5ED");
  }
}

module.exports = GoblinWarDrums;
