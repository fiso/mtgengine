"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RemoveSoulBase = require("../setCHR/RemoveSoul.js");

class RemoveSoul extends RemoveSoulBase {
  constructor(game) {
    super(game, "Remove Soul", "Ninth Edition", "9ED");
  }
}

module.exports = RemoveSoul;
