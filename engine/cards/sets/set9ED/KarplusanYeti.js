"use strict";
const Constants = require ("../../../Constants");
const KarplusanYetiBase = require("../setICE/KarplusanYeti");

class KarplusanYeti extends KarplusanYetiBase {
  constructor(game) {
    super(game, "Karplusan Yeti", "Ninth Edition", "9ED");
  }
}

module.exports = KarplusanYeti;
