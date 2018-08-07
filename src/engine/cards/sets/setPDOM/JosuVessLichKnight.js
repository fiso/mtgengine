"use strict";
const Constants = require ("../../../Constants");
const JosuVessLichKnightBase = require("../setDOM/JosuVessLichKnight");

class JosuVessLichKnight extends JosuVessLichKnightBase {
  constructor (game) {
    super(game, "Josu Vess, Lich Knight", "Dominaria Promos", "PDOM");
  }
}

module.exports = JosuVessLichKnight;
