"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WorshipBase = require("../set8ED/Worship.js");

class Worship extends WorshipBase {
  constructor(game) {
    super(game, "Worship", "Ninth Edition", "9ED");
  }
}

module.exports = Worship;
