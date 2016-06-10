"use strict";
const Constants = require ("../../../Constants");
const NostalgicDreamsBase = require("../setTOR/NostalgicDreams");

class NostalgicDreams extends NostalgicDreamsBase {
  constructor (game) {
    super(game, "Nostalgic Dreams", "Vintage Masters", "VMA");
  }
}

module.exports = NostalgicDreams;
