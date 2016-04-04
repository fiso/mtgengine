"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NoggleRansackerBase = require("../setEVE/NoggleRansacker.js");

class NoggleRansacker extends NoggleRansackerBase {
  constructor(game) {
    super(game, "Noggle Ransacker", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = NoggleRansacker;
