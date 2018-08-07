"use strict";
const Constants = require ("../../../Constants");
const MemniteBase = require("../setTD2/Memnite");

class Memnite extends MemniteBase {
  constructor (game) {
    super(game, "Memnite", "Magic Online Promos", "PRM");
  }
}

module.exports = Memnite;
