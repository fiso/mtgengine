"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarplusanStriderBase = require("../setCSP/KarplusanStrider.js");

class KarplusanStrider extends KarplusanStriderBase {
  constructor(game) {
    super(game, "Karplusan Strider", "Tenth Edition", "10E");
  }
}

module.exports = KarplusanStrider;
