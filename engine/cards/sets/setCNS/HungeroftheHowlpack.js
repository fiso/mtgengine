"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HungeroftheHowlpackBase = require("../setDKA/HungeroftheHowlpack.js");

class HungeroftheHowlpack extends HungeroftheHowlpackBase {
  constructor(game) {
    super(game, "Hunger of the Howlpack", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = HungeroftheHowlpack;
