"use strict";
const Constants = require ("../../../Constants");
const LooterilKorBase = require("../setTD0/LooterilKor");

class LooterilKor extends LooterilKorBase {
  constructor (game) {
    super(game, "Looter il-Kor", "Time Spiral", "TSP");
  }
}

module.exports = LooterilKor;
