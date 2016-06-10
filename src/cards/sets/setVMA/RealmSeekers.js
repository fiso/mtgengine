"use strict";
const Constants = require ("../../../Constants");
const RealmSeekersBase = require("../setCNS/RealmSeekers");

class RealmSeekers extends RealmSeekersBase {
  constructor (game) {
    super(game, "Realm Seekers", "Vintage Masters", "VMA");
  }
}

module.exports = RealmSeekers;
