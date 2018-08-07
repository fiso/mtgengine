"use strict";
const Constants = require ("../../../Constants");
const HungeroftheHowlpackBase = require("../setCNS/HungeroftheHowlpack");

class HungeroftheHowlpack extends HungeroftheHowlpackBase {
  constructor (game) {
    super(game, "Hunger of the Howlpack", "Dark Ascension", "DKA");
  }
}

module.exports = HungeroftheHowlpack;
