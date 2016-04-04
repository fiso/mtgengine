"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlazeBase = require("../set6ED/Blaze.js");

class Blaze extends BlazeBase {
  constructor(game) {
    super(game, "Blaze", "Ninth Edition", "9ED");
  }
}

module.exports = Blaze;
