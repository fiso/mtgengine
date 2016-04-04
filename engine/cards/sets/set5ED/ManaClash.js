"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaClashBase = require("../set8ED/ManaClash.js");

class ManaClash extends ManaClashBase {
  constructor(game) {
    super(game, "Mana Clash", "Fifth Edition", "5ED");
  }
}

module.exports = ManaClash;
