"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarplusanStriderBase = require("../setCSP/KarplusanStrider.js");

class KarplusanStrider extends KarplusanStriderBase {
  constructor(game) {
    super(game, "Karplusan Strider", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KarplusanStrider;
