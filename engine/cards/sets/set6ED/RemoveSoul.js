"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RemoveSoulBase = require("../setCHR/RemoveSoul.js");

class RemoveSoul extends RemoveSoulBase {
  constructor(game) {
    super(game, "Remove Soul", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RemoveSoul;
