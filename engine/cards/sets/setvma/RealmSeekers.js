"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RealmSeekersBase = require("../setCNS/RealmSeekers.js");

class RealmSeekers extends RealmSeekersBase {
  constructor(game) {
    super(game, "Realm Seekers", "Vintage Masters", "VMA");
  }
}

module.exports = RealmSeekers;
