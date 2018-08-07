"use strict";
const Constants = require ("../../../Constants");
const MagusoftheUnseenBase = require("../setME2/MagusoftheUnseen");

class MagusoftheUnseen extends MagusoftheUnseenBase {
  constructor (game) {
    super(game, "Magus of the Unseen", "Fifth Edition", "5ED");
  }
}

module.exports = MagusoftheUnseen;
