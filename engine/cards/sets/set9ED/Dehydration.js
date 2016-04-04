"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DehydrationBase = require("../set8ED/Dehydration.js");

class Dehydration extends DehydrationBase {
  constructor(game) {
    super(game, "Dehydration", "Ninth Edition", "9ED");
  }
}

module.exports = Dehydration;
