"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarplusanMinotaur extends Card {
  constructor(game) {
    super(game, "Karplusan Minotaur", "Coldsnap", "CSP");
  }
}

module.exports = KarplusanMinotaur;
