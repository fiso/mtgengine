"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealmRazer extends Card {
  constructor(game) {
    super(game, "Realm Razer", "Shards of Alara", "ALA");
  }
}

module.exports = RealmRazer;
