"use strict";
const Constants = require ("../../../Constants");
const AvenWindreaderBase = require("../set10E/AvenWindreader");

class AvenWindreader extends AvenWindreaderBase {
  constructor (game) {
    super(game, "Aven Windreader", "Odyssey", "ODY");
  }
}

module.exports = AvenWindreader;
