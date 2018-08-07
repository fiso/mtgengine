"use strict";
const Constants = require ("../../../Constants");
const SlobadGoblinTinkererBase = require("../setC16/SlobadGoblinTinkerer");

class SlobadGoblinTinkerer extends SlobadGoblinTinkererBase {
  constructor (game) {
    super(game, "Slobad, Goblin Tinkerer", "Darksteel", "DST");
  }
}

module.exports = SlobadGoblinTinkerer;
