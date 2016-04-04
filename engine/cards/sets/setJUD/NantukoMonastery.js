"use strict";
const Constants = require ("../../../Constants");
const NantukoMonasteryBase = require("../setARC/NantukoMonastery");

class NantukoMonastery extends NantukoMonasteryBase {
  constructor(game) {
    super(game, "Nantuko Monastery", "Judgment", "JUD");
  }
}

module.exports = NantukoMonastery;
