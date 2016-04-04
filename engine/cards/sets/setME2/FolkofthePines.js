"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FolkofthePinesBase = require("../setDKM/FolkofthePines.js");

class FolkofthePines extends FolkofthePinesBase {
  constructor(game) {
    super(game, "Folk of the Pines", "Masters Edition II", "ME2");
  }
}

module.exports = FolkofthePines;
