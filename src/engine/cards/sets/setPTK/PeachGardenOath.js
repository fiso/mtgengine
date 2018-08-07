"use strict";
const Constants = require ("../../../Constants");
const PeachGardenOathBase = require("../setME3/PeachGardenOath");

class PeachGardenOath extends PeachGardenOathBase {
  constructor (game) {
    super(game, "Peach Garden Oath", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = PeachGardenOath;
