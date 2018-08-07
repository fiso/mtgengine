"use strict";
const Constants = require ("../../../Constants");
const SelvalaHeartoftheWildsBase = require("../setPZ2/SelvalaHeartoftheWilds");

class SelvalaHeartoftheWilds extends SelvalaHeartoftheWildsBase {
  constructor (game) {
    super(game, "Selvala, Heart of the Wilds", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SelvalaHeartoftheWilds;
