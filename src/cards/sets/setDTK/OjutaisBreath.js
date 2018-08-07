"use strict";
const Constants = require ("../../../Constants");
const OjutaisBreathBase = require("../setIMA/OjutaisBreath");

class OjutaisBreath extends OjutaisBreathBase {
  constructor (game) {
    super(game, "Ojutai's Breath", "Dragons of Tarkir", "DTK");
  }
}

module.exports = OjutaisBreath;
