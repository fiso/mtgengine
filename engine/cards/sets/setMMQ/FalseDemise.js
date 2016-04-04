"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FalseDemiseBase = require("../setALL/FalseDemise.js");

class FalseDemise extends FalseDemiseBase {
  constructor(game) {
    super(game, "False Demise", "Mercadian Masques", "MMQ");
  }
}

module.exports = FalseDemise;
