"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElspethSunsChampionBase = require("../setDDO/ElspethSunsChampion.js");

class ElspethSunsChampion extends ElspethSunsChampionBase {
  constructor(game) {
    super(game, "Elspeth, Sun's Champion", "Theros", "THS");
  }
}

module.exports = ElspethSunsChampion;
