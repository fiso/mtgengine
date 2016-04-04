"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WyluliWolfBase = require("../setARN/WyluliWolf.js");

class WyluliWolf extends WyluliWolfBase {
  constructor(game) {
    super(game, "Wyluli Wolf", "Masters Edition", "MED");
  }
}

module.exports = WyluliWolf;
