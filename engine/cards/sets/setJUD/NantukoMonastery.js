"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NantukoMonasteryBase = require("../setARC/NantukoMonastery.js");

class NantukoMonastery extends NantukoMonasteryBase {
  constructor(game) {
    super(game, "Nantuko Monastery", "Judgment", "JUD");
  }
}

module.exports = NantukoMonastery;
