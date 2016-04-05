"use strict";
const Constants = require ("../../../Constants");
const ChapelGeistBase = require("../setDDQ/ChapelGeist");

class ChapelGeist extends ChapelGeistBase {
  constructor(game) {
    super(game, "Chapel Geist", "Innistrad", "ISD");
  }
}

module.exports = ChapelGeist;
