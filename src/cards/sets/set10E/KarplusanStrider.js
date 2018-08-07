"use strict";
const Constants = require ("../../../Constants");
const KarplusanStriderBase = require("../setMM2/KarplusanStrider");

class KarplusanStrider extends KarplusanStriderBase {
  constructor (game) {
    super(game, "Karplusan Strider", "Tenth Edition", "10E");
  }
}

module.exports = KarplusanStrider;
