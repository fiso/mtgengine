"use strict";
const Constants = require ("../../../Constants");
const DespoilerofSoulsBase = require("../setDDR/DespoilerofSouls");

class DespoilerofSouls extends DespoilerofSoulsBase {
  constructor (game) {
    super(game, "Despoiler of Souls", "Magic Origins Promos", "PORI");
  }
}

module.exports = DespoilerofSouls;
