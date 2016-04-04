"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GangofElkBase = require("../set7ED/GangofElk.js");

class GangofElk extends GangofElkBase {
  constructor(game) {
    super(game, "Gang of Elk", "Urza's Legacy", "ULG");
  }
}

module.exports = GangofElk;
