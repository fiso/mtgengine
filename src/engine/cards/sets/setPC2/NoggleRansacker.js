"use strict";
const Constants = require ("../../../Constants");
const NoggleRansackerBase = require("../setPCA/NoggleRansacker");

class NoggleRansacker extends NoggleRansackerBase {
  constructor (game) {
    super(game, "Noggle Ransacker", "Planechase 2012", "PC2");
  }
}

module.exports = NoggleRansacker;
