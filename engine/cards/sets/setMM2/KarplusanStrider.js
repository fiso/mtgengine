"use strict";
const Constants = require ("../../../Constants");
const KarplusanStriderBase = require("../setCSP/KarplusanStrider");

class KarplusanStrider extends KarplusanStriderBase {
  constructor(game) {
    super(game, "Karplusan Strider", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KarplusanStrider;
