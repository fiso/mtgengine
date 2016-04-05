"use strict";
const Constants = require ("../../../Constants");
const NoggleRansackerBase = require("../setEVE/NoggleRansacker");

class NoggleRansacker extends NoggleRansackerBase {
  constructor(game) {
    super(game, "Noggle Ransacker", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = NoggleRansacker;
