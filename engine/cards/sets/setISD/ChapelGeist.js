"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChapelGeistBase = require("../setDDQ/ChapelGeist.js");

class ChapelGeist extends ChapelGeistBase {
  constructor(game) {
    super(game, "Chapel Geist", "Innistrad", "ISD");
  }
}

module.exports = ChapelGeist;
