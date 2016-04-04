"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NostalgicDreamsBase = require("../setTOR/NostalgicDreams.js");

class NostalgicDreams extends NostalgicDreamsBase {
  constructor(game) {
    super(game, "Nostalgic Dreams", "Vintage Masters", "VMA");
  }
}

module.exports = NostalgicDreams;
