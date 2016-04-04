"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbyssalHunterBase = require("../set6ED/AbyssalHunter.js");

class AbyssalHunter extends AbyssalHunterBase {
  constructor(game) {
    super(game, "Abyssal Hunter", "Mirage", "MIR");
  }
}

module.exports = AbyssalHunter;
