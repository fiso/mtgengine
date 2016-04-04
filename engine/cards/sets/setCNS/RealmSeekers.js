"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealmSeekers extends Card {
  constructor(game) {
    super(game, "Realm Seekers", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = RealmSeekers;
