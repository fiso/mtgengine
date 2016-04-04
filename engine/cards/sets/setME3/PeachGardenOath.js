"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PeachGardenOathBase = require("../set8ED/PeachGardenOath.js");

class PeachGardenOath extends PeachGardenOathBase {
  constructor(game) {
    super(game, "Peach Garden Oath", "Masters Edition III", "ME3");
  }
}

module.exports = PeachGardenOath;
