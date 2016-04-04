"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticRemoraBase = require("../setICE/MysticRemora.js");

class MysticRemora extends MysticRemoraBase {
  constructor(game) {
    super(game, "Mystic Remora", "Masters Edition", "MED");
  }
}

module.exports = MysticRemora;
