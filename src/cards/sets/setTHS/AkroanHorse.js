"use strict";
const Constants = require ("../../../Constants");
const AkroanHorseBase = require("../setC16/AkroanHorse");

class AkroanHorse extends AkroanHorseBase {
  constructor (game) {
    super(game, "Akroan Horse", "Theros", "THS");
  }
}

module.exports = AkroanHorse;
