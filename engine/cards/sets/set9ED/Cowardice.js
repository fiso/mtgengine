"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CowardiceBase = require("../set8ED/Cowardice.js");

class Cowardice extends CowardiceBase {
  constructor(game) {
    super(game, "Cowardice", "Ninth Edition", "9ED");
  }
}

module.exports = Cowardice;
