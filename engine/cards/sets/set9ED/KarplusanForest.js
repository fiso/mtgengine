"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarplusanForestBase = require("../set6ED/KarplusanForest.js");

class KarplusanForest extends KarplusanForestBase {
  constructor(game) {
    super(game, "Karplusan Forest", "Ninth Edition", "9ED");
  }
}

module.exports = KarplusanForest;
