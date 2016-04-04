"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticMonasteryBase = require("../setDDN/MysticMonastery.js");

class MysticMonastery extends MysticMonasteryBase {
  constructor(game) {
    super(game, "Mystic Monastery", "Khans of Tarkir", "KTK");
  }
}

module.exports = MysticMonastery;
