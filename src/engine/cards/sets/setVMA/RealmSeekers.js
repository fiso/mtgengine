"use strict";
const Constants = require ("../../../Constants");
const RealmSeekersBase = require("../setC16/RealmSeekers");

class RealmSeekers extends RealmSeekersBase {
  constructor (game) {
    super(game, "Realm Seekers", "Vintage Masters", "VMA");
  }
}

module.exports = RealmSeekers;
