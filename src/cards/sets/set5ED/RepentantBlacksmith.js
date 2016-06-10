"use strict";
const Constants = require ("../../../Constants");
const RepentantBlacksmithBase = require("../setARN/RepentantBlacksmith");

class RepentantBlacksmith extends RepentantBlacksmithBase {
  constructor (game) {
    super(game, "Repentant Blacksmith", "Fifth Edition", "5ED");
  }
}

module.exports = RepentantBlacksmith;
