"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealmRazer extends UnimplementedCard {
  constructor(game) {
    super(game, "Realm Razer", "Shards of Alara", "ALA");
  }
}

module.exports = RealmRazer;
