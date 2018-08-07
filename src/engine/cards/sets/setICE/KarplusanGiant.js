"use strict";
const Constants = require ("../../../Constants");
const KarplusanGiantBase = require("../setME2/KarplusanGiant");

class KarplusanGiant extends KarplusanGiantBase {
  constructor (game) {
    super(game, "Karplusan Giant", "Ice Age", "ICE");
  }
}

module.exports = KarplusanGiant;
