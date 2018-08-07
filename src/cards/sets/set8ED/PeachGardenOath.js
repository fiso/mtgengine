"use strict";
const Constants = require ("../../../Constants");
const PeachGardenOathBase = require("../setME3/PeachGardenOath");

class PeachGardenOath extends PeachGardenOathBase {
  constructor (game) {
    super(game, "Peach Garden Oath", "Eighth Edition", "8ED");
  }
}

module.exports = PeachGardenOath;
