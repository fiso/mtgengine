"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShivanHellkiteBase = require("../setDDG/ShivanHellkite.js");

class ShivanHellkite extends ShivanHellkiteBase {
  constructor(game) {
    super(game, "Shivan Hellkite", "Tenth Edition", "10E");
  }
}

module.exports = ShivanHellkite;
