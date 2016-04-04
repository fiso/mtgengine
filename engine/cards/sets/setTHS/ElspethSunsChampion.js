"use strict";
const Constants = require ("../../../Constants");
const ElspethSunsChampionBase = require("../setDDO/ElspethSunsChampion");

class ElspethSunsChampion extends ElspethSunsChampionBase {
  constructor(game) {
    super(game, "Elspeth, Sun's Champion", "Theros", "THS");
  }
}

module.exports = ElspethSunsChampion;
