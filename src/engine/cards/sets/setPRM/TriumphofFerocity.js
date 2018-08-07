"use strict";
const Constants = require ("../../../Constants");
const TriumphofFerocityBase = require("../setAVR/TriumphofFerocity");

class TriumphofFerocity extends TriumphofFerocityBase {
  constructor (game) {
    super(game, "Triumph of Ferocity", "Magic Online Promos", "PRM");
  }
}

module.exports = TriumphofFerocity;
