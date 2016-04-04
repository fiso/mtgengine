"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerraAdvocateBase = require("../setDD3_DVD/SerraAdvocate.js");

class SerraAdvocate extends SerraAdvocateBase {
  constructor(game) {
    super(game, "Serra Advocate", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = SerraAdvocate;
