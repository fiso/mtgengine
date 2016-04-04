"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShivanHellkiteBase = require("../setDDG/ShivanHellkite.js");

class ShivanHellkite extends ShivanHellkiteBase {
  constructor(game) {
    super(game, "Shivan Hellkite", "Urza's Saga", "USG");
  }
}

module.exports = ShivanHellkite;
