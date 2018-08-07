"use strict";
const Constants = require ("../../../Constants");
const KarplusanYetiBase = require("../set9ED/KarplusanYeti");

class KarplusanYeti extends KarplusanYetiBase {
  constructor (game) {
    super(game, "Karplusan Yeti", "Ice Age", "ICE");
  }
}

module.exports = KarplusanYeti;
