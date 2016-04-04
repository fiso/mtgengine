"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MendingHandsBase = require("../setBOK/MendingHands.js");

class MendingHands extends MendingHandsBase {
  constructor(game) {
    super(game, "Mending Hands", "Ninth Edition", "9ED");
  }
}

module.exports = MendingHands;
