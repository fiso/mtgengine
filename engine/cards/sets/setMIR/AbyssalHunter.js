"use strict";
const Constants = require ("../../../Constants");
const AbyssalHunterBase = require("../set6ED/AbyssalHunter");

class AbyssalHunter extends AbyssalHunterBase {
  constructor(game) {
    super(game, "Abyssal Hunter", "Mirage", "MIR");
  }
}

module.exports = AbyssalHunter;
