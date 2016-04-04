"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeiNightRaidersBase = require("../setME3/WeiNightRaiders.js");

class WeiNightRaiders extends WeiNightRaidersBase {
  constructor(game) {
    super(game, "Wei Night Raiders", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WeiNightRaiders;
