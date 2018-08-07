"use strict";
const Constants = require ("../../../Constants");
const GlimmerpointStagBase = require("../setEMA/GlimmerpointStag");

class GlimmerpointStag extends GlimmerpointStagBase {
  constructor (game) {
    super(game, "Glimmerpoint Stag", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = GlimmerpointStag;
