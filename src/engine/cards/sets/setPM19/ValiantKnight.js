"use strict";
const Constants = require ("../../../Constants");
const ValiantKnightBase = require("../setM19/ValiantKnight");

class ValiantKnight extends ValiantKnightBase {
  constructor (game) {
    super(game, "Valiant Knight", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = ValiantKnight;
