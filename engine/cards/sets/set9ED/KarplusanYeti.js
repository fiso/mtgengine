"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarplusanYetiBase = require("../setICE/KarplusanYeti.js");

class KarplusanYeti extends KarplusanYetiBase {
  constructor(game) {
    super(game, "Karplusan Yeti", "Ninth Edition", "9ED");
  }
}

module.exports = KarplusanYeti;
