"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SleightofMindBase = require("../setCED/SleightofMind.js");

class SleightofMind extends SleightofMindBase {
  constructor(game) {
    super(game, "Sleight of Mind", "Fourth Edition", "4ED");
  }
}

module.exports = SleightofMind;
